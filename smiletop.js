import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './firebase/init.js';

// Auth imports
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  updateProfile, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged, signOut  } from "firebase/auth";

// Firestore imports
import { getFirestore, setDoc, getDoc, deleteDoc, onSnapshot, 
  collection, doc, updateDoc, query, where, getDocs, serverTimestamp} from "firebase/firestore";

// widev imports
import { 
  witip, Capi, Mensaje, Notificacion, showLoading, fechaLocal, savels, getls
} from './widev.js';

// 🔐 GESTIÓN DE AUTENTICACIÓN EN DASHBOARD
onAuthStateChanged(auth, async user => {
  !user ? window.location.href = '/' : smiletopOne(user);
});

// 🚪 LOGOUT FUNCTIONALITY
$('.logout-btn').click(async () => {
  try {
    await signOut(auth);
    Mensaje('Sesión cerrada correctamente', 'success');
    window.location.href = '/';
  } catch(e){console.error(e)}
});

 // ...existing code...

async function smiletopOne(user){

const miSmiles = `
<div class="tabla-container">
  <div class="tabla-header">
    <h2><i class="fas fa-users"></i> Gestión de Usuarios Smile</h2>
    <button class="btn-nuevo" onclick="nuevoUsuario()">
      <i class="fas fa-plus"></i> Nuevo Usuario
    </button>
  </div>
  
  <div class="tabla-responsive">
    <table class="tabla-smiles" id="tablaSmiles">
      <thead>
        <tr>
          <th><i class="fas fa-user"></i> Usuario</th>
          <th><i class="fas fa-envelope"></i> Email</th>
          <th><i class="fas fa-id-card"></i> Nombre</th>
          <th><i class="fas fa-id-card-alt"></i> Apellidos</th>
          <th><i class="fas fa-phone"></i> Celular</th>
          <th><i class="fas fa-crown"></i> Rol</th>
          <th><i class="fas fa-birthday-cake"></i> F. Nacimiento</th>
          <th><i class="fas fa-calendar"></i> Creación</th>
          <th><i class="fas fa-key"></i> UID</th>
          <th><i class="fas fa-cogs"></i> Acciones</th>
        </tr>
      </thead>
      <tbody id="bodySmiles">
        <!-- Usuarios dinámicos -->
      </tbody>
    </table>
  </div>
</div>

<!-- Modal de Confirmación -->
<div class="modal" id="confirmationModal">
  <div class="modal-content confirmation-modal">
    <div class="modal-header">
      <h3 class="modal-title" id="confirmationTitle">Confirmar Acción</h3>
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body">
      <div class="confirmation-message" id="confirmationMessage"></div>
      <div class="confirmation-details" id="confirmationDetails"></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary close-modal">Cancelar</button>
      <button class="btn btn-danger" id="confirmActionBtn">Confirmar</button>
    </div>
  </div>
</div>
`;

$(function(){

// 🔥 Cargar usuarios con datos completos
const cargarUsuarios = async () => {
  try {
    showLoading(true);
    const usuarios = await getDocs(collection(db, 'smiles'));
    
    $('#bodySmiles').html(usuarios.docs.map(doc => {
      const data = doc.data();
      
      // 📅 Formatear fechas completas con segundos
      const fechaCreacion = data.creacion ? 
        new Date(data.creacion.seconds * 1000).toLocaleString('es-PE', {
          year: 'numeric', month: '2-digit', day: '2-digit',
          hour: '2-digit', minute: '2-digit', second: '2-digit'
        }) : 'N/A';
      
      const fechaNacimiento = data.fechaNacimiento ? 
        new Date(data.fechaNacimiento.seconds * 1000).toLocaleDateString('es-PE') : 'N/A';
      
      return `
        <tr data-uid="${data.uid}">
          <td><input type="text" value="${data.usuario}" class="input-tabla" data-field="usuario"></td>
          <td><input type="email" value="${data.email}" class="input-tabla" data-field="email"></td>
          <td><input type="text" value="${data.nombre}" class="input-tabla" data-field="nombre"></td>
          <td><input type="text" value="${data.apellidos}" class="input-tabla" data-field="apellidos"></td>
          <td><input type="text" value="${data.celular}" class="input-tabla" data-field="celular"></td>
          <td>
            <select class="select-tabla" data-field="rol">
              <option value="smile" ${data.rol === 'smile' ? 'selected' : ''}>Smile</option>
              <option value="smiletop" ${data.rol === 'smiletop' ? 'selected' : ''}>Smile Top</option>
            </select>
          </td>
          <td><span class="fecha-nacimiento">${fechaNacimiento}</span></td>
          <td><span class="fecha-creacion" title="Creado: ${fechaCreacion}">${fechaCreacion}</span></td>
          <td><code class="uid-display" title="${data.uid}">${data.uid.substring(0, 12)}...</code></td>
          <td class="acciones">
            <button class="btn-accion btn-actualizar" data-uid="${data.uid}">
              <i class="fas fa-save"></i>
            </button>
            <button class="btn-accion btn-eliminar" data-uid="${data.uid}" data-usuario="${data.usuario}">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
    }).join(''));
    
    showLoading(false);
  } catch(e) {
    console.error('Error:', e);
    Mensaje('Error al cargar usuarios', 'error');
    showLoading(false);
  }
};

// 🚀 Event listeners compactos
$(document).on('click', '.btn-actualizar', function() {
  const uid = $(this).data('uid');
  const fila = $(this).closest('tr');
  const datos = ['usuario', 'email', 'nombre', 'apellidos', 'celular', 'rol']
    .reduce((acc, field) => {
      acc[field] = fila.find(`[data-field="${field}"]`).val();
      return acc;
    }, {});
  
  mostrarConfirmacion('Actualizar Usuario', `¿Actualizar "${datos.usuario}"?`, 'actualizar', uid, datos);
});

$(document).on('click', '.btn-eliminar', function() {
  const uid = $(this).data('uid');
  const usuario = $(this).data('usuario');
  
  mostrarConfirmacion('Eliminar Usuario', `¿Eliminar "${usuario}"?`, 'eliminar', uid, { usuario });
});

// 🎯 Modal de confirmación inteligente
const mostrarConfirmacion = (titulo, mensaje, accion, uid, datos) => {
  $('#confirmationTitle').text(titulo);
  $('#confirmationMessage').text(mensaje);
  
  if (accion === 'eliminar') {
    $('#confirmationDetails').html(`
      <div class="alert-warning">
        <strong>⚠️ Limitación Plan Gratis:</strong><br>
        ✅ Se elimina de Firestore<br>
        ❌ Auth permanece activo<br><br>
        <strong>Para eliminación completa de Auth:</strong><br>
        <a href="https://console.firebase.google.com/project/witime/authentication/users" 
           target="_blank" class="btn-firebase-console">
          🔥 Abrir Firebase Console
        </a>
      </div>
    `);
  } else {
    $('#confirmationDetails').html(`
      <strong>Campos a actualizar:</strong><br>
      👤 Usuario, Email, Nombre, Apellidos<br>
      📱 Celular, Rol
    `);
  }
  
  $('#confirmActionBtn').data({ accion, uid, datos: JSON.stringify(datos) });
  openModal('confirmationModal');
};

// ✅ Confirmar acción
$(document).on('click', '#confirmActionBtn', async function() {
  const { accion, uid, datos } = $(this).data();
  closeModal('confirmationModal');
  
  if (accion === 'actualizar') {
    await actualizarUsuario(uid, JSON.parse(datos));
  } else if (accion === 'eliminar') {
    await eliminarUsuario(uid, JSON.parse(datos));
  }
});

// 🔄 Actualizar usuario compacto
const actualizarUsuario = async (uid, datos) => {
  try {
    showLoading(true);
    const usuario = (await getDocs(collection(db, 'smiles'))).docs.find(doc => doc.data().uid === uid);
    
    if (usuario) {
      await updateDoc(usuario.ref, { ...datos, ultimaActualizacion: serverTimestamp() });
      Mensaje(`✅ "${datos.usuario}" actualizado`, 'success');
      cargarUsuarios();
    } else {
      Mensaje('Usuario no encontrado', 'error');
    }
    
    showLoading(false);
  } catch(e) {
    console.error('Error:', e);
    Mensaje('Error al actualizar', 'error');
    showLoading(false);
  }
};

// 🗑️ Eliminar usuario compacto
const eliminarUsuario = async (uid, datos) => {
  try {
    showLoading(true);
    const usuario = (await getDocs(collection(db, 'smiles'))).docs.find(doc => doc.data().uid === uid);
    
    if (usuario) {
      await deleteDoc(usuario.ref);
      Mensaje(`✅ "${datos.usuario}" eliminado de Firestore\n\n💡 Para eliminar de Auth:\n🔥 Ve a Firebase Console (enlace en modal)`, 'success');
      cargarUsuarios();
    } else {
      Mensaje('Usuario no encontrado', 'error');
    }
    
    showLoading(false);
  } catch(e) {
    console.error('Error:', e);
    Mensaje('Error al eliminar', 'error');
    showLoading(false);
  }
};

// 🎯 Inicializar
$('.app').html(miSmiles);
cargarUsuarios();

}); // End $(function)

}