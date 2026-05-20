import $ from 'jquery';
import { app, titulo, descri, keywii, linkweb } from './wii.js';
import { Notificacion, wiPath, wiFade, setMeta } from './widev.js';
import * as inicioMod from './web/inicio.js';

// ── NAV COMUN — rutas compartidas entre todos los roles ────────────────────────
const COMUN = [
  { href: '/acerca', page: 'acerca', ico: 'fa-circle-info', txt: 'Acerca' }
];

// ── NAV — Config visual por rol (nvleft = izquierda, nvright = derecha) ────────
export const NAV = {
  todos: {
    nvleft:  [{ href: '/', page: 'inicio', ico: 'fa-house', txt: 'Bienvenido' }, ...COMUN],
    nvright: [
      { isBtn: true, cls: 'bt_auth registrar', ico: 'fa-user-plus', txt: 'Registrarme' },
      { isBtn: true, cls: 'bt_auth login',     ico: 'fa-sign-in-alt', txt: 'Iniciar sessión'  },
    ],
  },
  smile: {
    nvleft:  [{ href: '/smile', page: 'smile', ico: 'fa-house', txt: 'Dashboard' }, ...COMUN],
    nvright: [
      { href: '/word',      page: 'word',      ico: 'fa-rocket', txt: 'Planificar'     },
      { href: '/nuevo',    page: 'nuevo',    ico: 'fa-plus',        txt: 'Nuevo Post' },
      { href: '/notas',    page: 'notas',    ico: 'fa-note-sticky', txt: 'Notas'      },
      { href: '/mensajes', page: 'mensajes', ico: 'fa-comments',    txt: 'Mensajes'   },
      { isPerfil: true }, { isSalir: true },
    ],
  },
  gestor: {
    nvleft:  [{ href: '/gestor', page: 'gestor', ico: 'fa-house', txt: 'Dashboard' }, ...COMUN],
    nvright: [
      { href: '/mensajes', page: 'mensajes', ico: 'fa-comments', txt: 'Mensajes' },
      { isPerfil: true }, { isSalir: true },
    ],
  },
  empresa: {
    nvleft:  [{ href: '/empresa', page: 'empresa', ico: 'fa-building', txt: 'Panel' }],
    nvright: [
      { href: '/mensajes', page: 'mensajes', ico: 'fa-comments', txt: 'Mensajes' },
      { isPerfil: true }, { isSalir: true },
    ],
  },
  admin: {
    nvleft: [
      { href: '/admin',    page: 'admin',    ico: 'fa-globe', txt: 'Plataforma' },
      { href: '/usuarios', page: 'usuarios', ico: 'fa-users', txt: 'Usuarios'   },
    ],
    nvright: [
      { href: '/mifcm', page: 'mifcm', ico: 'fa-bell', txt: 'Mi FCM' },
      { href: '/mensajes', page: 'mensajes', ico: 'fa-comments', txt: 'Mensajes' },
      { isPerfil: true }, { isSalir: true },
    ],
  },
};

// ── RUTAS — Fuente única de verdad - roles: null = público · ['rol',...] = protegido · area = carpeta del módulo ───────────────────────────────────────────────
export const RUTAS = [
  // ── Core público ───────────────────────────────────────────────
  { path: '/inicio',   area: 'web/', meta: { title: `${app} — ${titulo}`, desc: `${descri}` }},
  { path: '/login',    area: 'web/', meta: { title: `Iniciar Sesión — ${app}`, desc: `Accede a tu cuenta de ${app} para guardar tus notas, citas favoritas y progreso de lectura bíblica.` }},
  { path: '/citas',    area: 'web/', meta: { title: `Citas Bíblicas — ${app}`, desc: 'Descubre miles de frases y versículos bíblicos agrupados por categorías para inspirar tu día.' }},
  { path: '/biblia',   area: 'web/', meta: { title: `Audio Biblia en Quechua — ${app}`, desc: 'Escucha el Nuevo Testamento en quechua y otros idiomas. Reproductor ultrarrápido, 100% gratis.' }},
  { path: '/emojis',   area: 'web/', meta: { title: `Emojis Espirituales — ${app}`, desc: 'Explora y comparte emojis con significado espiritual para expresar tu fe.' }},
  { path: '/1lab',     area: 'web/', meta: { title: `1 Lab — ${app}`, desc: 'Laboratorio de ideas creativas y espirituales para expresar tu fe.' }},

  // ── Submódulos públicos ───────────────────────────────────────────────
  { path: '/blog',     area: 'web/blog/',    meta: { title: `Blog — ${app}`, desc: 'Artículos, testimonios y reflexiones espirituales para nutrir tu alma y fortalecer tu fe cada día.' }},
  { path: '/post',     area: 'web/blog/'    }, // setMeta lo hace post.js desde Firestore
  { path: '/chatwil',  area: 'web/chatwil/', meta: { title: `Ora por Mí — ${app}`, desc: 'Escribe tu petición de oración y recibe acompañamiento, esperanza y empatía al instante.' }},

  // ── Acerca / Legales / Info ───────────────────────────────────────────────
  { path: '/acerca',     area: 'web/acerca/', meta: { title: `Acerca de ${app}`, desc: `Conoce la historia, misión y valores de ${app} — una plataforma de fe creada con amor.` }},
  { path: '/descubre',   area: 'web/acerca/', meta: { title: `Descubre ${app} — Explora todo lo que tenemos`, desc: `Explora todas las funciones de ${app}: Biblia, citas, oración, blog y mucho más.` }},
  { path: '/terminos',   area: 'web/acerca/', meta: { title: `Términos y Condiciones — ${app}`, desc: `Lee los términos y condiciones de uso de la plataforma ${app}.` }},
  { path: '/cookies',    area: 'web/acerca/', meta: { title: `Política de Cookies — ${app}`, desc: `Conoce cómo ${app} usa cookies y cómo puedes gestionarlas desde tu navegador.` }},
  { path: '/privacidad', area: 'web/acerca/', meta: { title: `Privacidad — ${app}`, desc: `Tu privacidad es sagrada. Lee cómo ${app} protege y gestiona tu información personal.` }},
  { path: '/feedback',   area: 'web/acerca/', meta: { title: `Feedback — ${app}`, desc: `Compártenos tu opinión, sugerencias o reportes. ${app} crece gracias a ti.` }},
  { path: '/contacto',   area: 'web/acerca/', meta: { title: `Contáctanos — ${app}`, desc: `Escríbenos con tus dudas, ideas o peticiones. El equipo de ${app} te responde en 24h.` }},

  // ── Autenticadas (smile) ───────────────────────────────────────────────
  { path: '/smile',    area: 'smile/', roles: ['smile','gestor','empresa','admin'] },
  { path: '/notas',    area: 'smile/', roles: ['smile','gestor','empresa','admin'] },
  { path: '/perfil',   area: 'smile/', roles: ['smile','gestor','empresa','admin'] },
  { path: '/mensajes', area: 'smile/', roles: ['smile','gestor','empresa','admin'] },
  { path: '/word',     area: 'smile/', roles: ['smile','gestor','empresa','admin'] },
  { path: '/musica',   area: 'web/', roles: ['smile','gestor','empresa','admin'] },
  { path: '/nuevo',    area: 'web/blog/', roles: ['smile','gestor','empresa','admin'] },

  // ── Autenticadas (roles superiores) ───────────────────────────────────────────────
  { path: '/gestor',   area: 'gestor/',  roles: ['gestor','empresa','admin'] },
  { path: '/empresa',  area: 'empresa/', roles: ['empresa','admin']          },
  { path: '/admin',    area: 'admin/',   roles: ['admin']                    },
  { path: '/usuarios', area: 'admin/',   roles: ['admin']                    },
  { path: '/mifcm',    area: 'admin/',   roles: ['admin']                    },
];

// ── GLOB — Vite mapea todos los módulos en build time ───────────────────────────────────────────────
const MODS = import.meta.glob([
  './{web,smile,gestor,empresa,admin}/**/*.js',
  '!./web/inicio.js',
  '!./web/chatwil/head/**/*.js',
  '!./web/chatwil/memoria.js',
  '!./web/chatwil/brain.js',
  '!./web/blog/devblog.js',
  '!./web/blog/wiad.js'
]);
const rutasMod = (area, page) => MODS[`./${area}${page}.js`];

// ── META MAP — Index rápido ruta → meta ───────────────────────────────────────────────
const META_MAP = Object.fromEntries(RUTAS.filter(r => r.meta).map(r => [r.path, r.meta]));

// ── MOTOR ──────────────────────────────────────────────────────────────────────
class WiRutas {
  constructor() {
    this.rutas     = {};               // funciones lazy originales — nunca se sobreescriben
    this.cache     = { '/inicio': inicioMod }; // inicio eagerly bundled, cero red
    this.modActual = null;
    this.cargand   = false;
    this.HOME      = 'inicio';
    this.main      = '#wimain';
    this.pathActual = null;
    this.isFirstLoad = true;
  }

  register(path, fn) { this.rutas[path] = fn; }
  inicio() { return Promise.resolve(inicioMod); }

  registerAll(getRol) {
    const pub = {}, priv = {};

    RUTAS.forEach(({ path, area, roles = null, mod }) => {
      if (path === '/inicio') {
        pub[path] = () => this.inicio();
        return;
      }
      const page = mod ?? path.split('/').pop();
      const imp  = rutasMod(area, page);
      if (!imp) { console.warn(`[ruta] no encontrado: ${area}${page}.js`); return; }
      roles === null ? (pub[path] = imp) : (priv[path] ??= []).push({ roles, imp });
    });

    const noAuth = () => Promise.resolve({
      render: () => '',
      init:   () => setTimeout(() => this.navigate('/login'), 0),
    });

    new Set([...Object.keys(pub), ...Object.keys(priv)]).forEach(path => {
      const pubImp   = pub[path];
      const privList = priv[path] || [];
      const resolve  = () => { const rol = getRol?.() || null; return privList.find(e => e.roles.includes(rol)); };

      if (!privList.length)  return this.register(path, pubImp);
      if (!pubImp)           return this.register(path, () => { const e = resolve(); return e ? e.imp() : noAuth(); });
      this.register(path, () => { const e = resolve(); return e ? e.imp() : pubImp(); });
    });
  }

  // ── PREFETCH: descarga el módulo al hacer hover, sin bloquear nada ───────────
  async prefetch(ruta) {
    const norm = wiPath.limpiar(ruta) === '/' ? `/${this.HOME}` : wiPath.limpiar(ruta);
    if (this.cache[norm] || !this.rutas[norm]) return;   // ya listo o no existe
    try {
      this.cache[norm] = await this.rutas[norm]();
      console.log(`⚡ Listo ${norm.replace('/', '')}`);
    } catch { console.warn('[ruta] prefetch falló:', norm); }
  }

  // ── NAVIGATE: si ya está en cache, carga instantánea ─────────────────────────
  async navigate(ruta, historial = true) {
    if (this.cargand) return;
    this.cargand = true;
    const norm = wiPath.limpiar(ruta) === '/' ? `/${this.HOME}` : wiPath.limpiar(ruta);

    try {
      this.modActual?.cleanup?.();
      const slug = !this.rutas[norm] ? norm.slice(1) : null;
      const cargar  = slug ? rutasMod('web/blog/', 'post') : (this.rutas[norm] ?? rutasMod('web/', '404'));
      const mod = this.cache[norm] ?? await cargar();
      if (!slug) this.cache[norm] = mod;

      const [html] = await Promise.all([mod.render(slug)]);
      
      document.body.classList.remove('is-public-profile');
      this.marcarNav(norm);

      // Hydration: Solo preservar contenido prerenderizado si la ruta ES la del inicio
      // (el index.html genérico solo tiene prerender del inicio; en otras rutas siempre inyectar)
      const esHydration = this.isFirstLoad
        && $(this.main).children().length > 0
        && !window.__WIREADY__
        && norm === `/${this.HOME}`;
      if (esHydration) {
        this.isFirstLoad = false;
      } else {
        await wiFade(this.main, html);
      }
      this.isFirstLoad = false;

      window.scrollTo(0, 0);

      // ── SEO dinámico ─────────────────────────────────────────────────────────────────
      const rutaMeta = META_MAP[norm];
      if (rutaMeta) setMeta({ ...rutaMeta, path: norm === `/${this.HOME}` ? '/' : norm });

      mod.init?.(slug);

      if (historial) wiPath.poner(norm === `/${this.HOME}` ? '/' : norm, document.title);
      this.pathActual = norm;
      this.modActual = mod;
    } catch (err) {
      if (err instanceof TypeError && err.message.includes('Failed to fetch')) return location.reload();
      Notificacion('Error en la ruta');
      console.error('[ruta] navigate:', err);
    } finally {
      this.cargand = false;
    }
  }

  marcarNav(norm) {
    const pag = norm.slice(1) || this.HOME;
    $('.nv_item').removeClass('active');
    $(`.nv_item[data-page="${pag}"]`).addClass('active');
  }

  init() {
    this.marcarNav(wiPath.actual === '/' ? `/${this.HOME}` : wiPath.limpiar(wiPath.actual));

    $(document)
      .on('click', '.nv_item', (e) => {
        e.preventDefault();
        const pag = $(e.currentTarget).data('page');
        this.navigate(pag === this.HOME ? '/' : `/${pag}`);
      })
      .on('mouseenter touchstart', '.nv_item[data-page]', (e) => {
        const pag = $(e.currentTarget).data('page');
        this.prefetch(pag === this.HOME ? '/' : `/${pag}`);
      });

    window.addEventListener('popstate', (e) => {
      const ruta = e.state?.ruta || wiPath.actual;
      const norm = wiPath.limpiar(ruta) === '/' ? `/${this.HOME}` : wiPath.limpiar(ruta);
      if (norm === this.pathActual) return;
      this.navigate(ruta, false);
    });
    this.navigate(wiPath.actual, false);
  }
}

export const rutas = new WiRutas();
