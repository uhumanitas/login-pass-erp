# Página de Acceso a Usuarios - Universidad Humanitas

Esta es una versión standalone (HTML puro) de la página de acceso a usuarios, convertida desde el componente Vue `AccesoUsrPage.vue`.

## Archivos incluidos

- **index.html** - Estructura HTML principal de la página
- **styles.css** - Estilos CSS personalizados
- **script.js** - Funcionalidad JavaScript (validaciones y efectos)

## Características

✅ Formulario de acceso a usuarios (matrícula/contraseña)
✅ Formulario de verificación de constancias
✅ Diseño responsive (móvil y escritorio)
✅ Validación de formularios en tiempo real
✅ Efectos visuales y animaciones
✅ Integración con Font Awesome para iconos
✅ Uso de Tailwind CSS vía CDN
✅ Colores personalizados de Humanitas (hgold: #CAAB55, hwine: #881912)

## Cómo usar

### Opción 1: Abrir directamente en el navegador
Simplemente abre el archivo `index.html` en tu navegador web favorito.

### Opción 2: Servidor local (recomendado)
Para evitar problemas con CORS y rutas de imágenes, es mejor usar un servidor local:

#### Con Python:
```bash
# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

#### Con Node.js (http-server):
```bash
npm install -g http-server
http-server -p 8000

# Luego abre: http://localhost:8000
```

#### Con PHP:
```bash
php -S localhost:8000

# Luego abre: http://localhost:8000
```

## Notas importantes

### Rutas de imágenes
Las rutas de las imágenes están configuradas como absolutas desde la raíz:
- `/pagesImages/Banner-usuario-LEON-querer-es-poder.webp`
- `/pagesImages/banner-usuario-movil-querer-es-poder-campana-leon.webp`
- `/pagesImages/portada-una-persona-humanitas-BLANCO.webp`

**Para que las imágenes funcionen correctamente:**
1. Copia la carpeta `pagesImages` del proyecto original a la misma carpeta donde está `index.html`
2. O actualiza las rutas en el HTML según tu estructura de carpetas

### Dependencias externas (CDN)
El proyecto usa las siguientes dependencias vía CDN:
- **Font Awesome 6.4.0** - Para los iconos
- **Tailwind CSS** - Para los estilos de utilidad

**Ventajas:**
- No requiere instalación de paquetes
- Funciona inmediatamente
- Siempre actualizado

**Desventajas:**
- Requiere conexión a internet
- Puede ser más lento en la primera carga

### Formularios
Los formularios apuntan a las URLs de producción:
- **Acceso usuarios:** `https://plataforma-humanitas.com/sistemahumanitas/ValidaUsuarioHumanitas.asp`
- **Verificación constancias:** `https://plataforma-humanitas.com/humanitas/ValidaConstancias.asp`

Si necesitas cambiar estas URLs para desarrollo, edita el atributo `action` de cada `<form>` en `index.html`.

## Personalización

### Cambiar colores
Los colores están definidos en la configuración de Tailwind en `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                hgold: '#CAAB55',  // Color dorado de Humanitas
                hwine: '#881912'   // Color vino de Humanitas
            }
        }
    }
}
```

### Modificar estilos
Puedes editar `styles.css` para cambiar:
- Estilos del formulario de login
- Animaciones de labels
- Efectos hover
- Diseño responsive

### Agregar funcionalidad
Edita `script.js` para:
- Agregar validaciones personalizadas
- Implementar nuevos efectos
- Conectar con APIs
- Agregar analytics

## Compatibilidad

✅ Chrome/Edge (últimas versiones)
✅ Firefox (últimas versiones)
✅ Safari (últimas versiones)
✅ Opera (últimas versiones)
✅ Navegadores móviles (iOS/Android)

## Diferencias con la versión Vue

Esta versión standalone **NO incluye:**
- El componente `NavbarInd` (se reemplazó con un navbar simple)
- El componente `PersonaHumanitas` (se integró directamente en el HTML)
- El componente `VideoHiL` (se reemplazó con un iframe de YouTube)
- Enrutamiento de Vue Router
- Reactividad de Vue

**Ventajas de esta versión:**
- No requiere build ni compilación
- Más ligera y rápida
- Fácil de integrar en cualquier proyecto
- No depende de Node.js ni npm

## Soporte

Para reportar problemas o sugerencias, contacta al equipo de desarrollo de Humanitas.

---

**Versión:** 1.0.0  
**Fecha:** Diciembre 2025  
**Basado en:** AccesoUsrPage.vue
