// INFORMACIÓN DEL APP 
export let id = 'retodelmes'
export let app = 'Reto del Mes'
export let icon = 'fa-chart-line'
export let titulo = 'Reto del Mes - Registro de Ventas y Competencia';
export let keywii = 'ventas, competencia, hospedaje, retos, trabajo';
export let descri = 'Registra tus ventas de forma fácil, compite con tus compañeros y gana el reto del mes.';
export let linkweb = 'https://retodelmes.web.app'; // Sin slash (/), al final
export let lanzamiento = 2026;
export let by = '@wilder.taype';
export let linkme = 'https://wtaype.github.io/';
export let ipdev = import.meta.env.VITE_DEV;
export let version = 'v28';

/** ACTUALIZAR AL TAG POR SEGURIDAD [TAG NUEVO] (1)
git tag v28 -m "Version v28" ; git push origin v28

ACTUALIZACIÓN AL MAIN PRINCIPAL DEL PROYECTO [MAIN] (2)
git add . ; git commit -m "Actualizacion Principal v28.10.10" ; git push origin main

// REEMPLAZAR TAG DE SEGURIDAD EXISTENTE [TAG REMPLAZO] (3)
git tag -d v28 ; git tag v28 -m "Version v28 actualizada" ; git push origin v28 --force

// PARA ACTUALIZAR SITEMAP EFFICIENTE (4)
npm run sitemap

// Actualizar versiones de seguridad [ELIMINAR CARPETA - ARCHIVO ONLINE] (5)
git rm --cached skills-lock.json ; git commit -m "Archivo Eliminado" ; git push origin main
git rm -r --cached .claude/ ; git commit -m "Carpeta Eliminada" ; git push origin main

 ACTUALIZACION TAG[END] */
