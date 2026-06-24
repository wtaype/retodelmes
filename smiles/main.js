import $ from 'jquery';
import { getls, wiSmart } from './widev.js';
import { rutas } from './rutas.js';

// ── RUTAS PROFESIONAL DE ACUERDO A ROLES  ─────────────────────────────
rutas.registerAll(() => getls('wiSmile')?.rol);

rutas.register('/', () => rutas.inicio());
rutas.register('/inicio', () => rutas.inicio());
rutas.init();
import('./header.js');
import('./footer.js')

wiSmart({
css: [
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap',
  'https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap',
],
});

