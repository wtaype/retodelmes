import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, limit, query } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer archivo .env para extraer las credenciales
const envContent = fs.readFileSync(path.join(__dirname, '.env'), 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) {
    env[parts[0].trim()] = parts.slice(1).join('=').trim();
  }
});

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkDocs() {
  console.log('Consultando registrosdb...');
  const snap = await getDocs(query(collection(db, 'registrosdb'), limit(10)));
  if (snap.empty) {
    console.log('No se encontraron registros.');
    return;
  }
  snap.docs.forEach(d => {
    const data = d.data();
    console.log(`ID: ${d.id} | Vendedor: "${data.vendedor}" | FechaTour: "${data.fechaTour}" | EstadoPago: "${data.estadoPago}" | Importe: ${data.importeTotal}`);
  });
}

checkDocs().catch(console.error);
