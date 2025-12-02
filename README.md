# Login y Recuperación de Contraseña - Universidad Humanitas

Sistema de acceso a usuarios y recuperación de contraseña para la Plataforma Universidad Humanitas, desarrollado con HTML, CSS y JavaScript vanilla.

## 🔗 Repositorio

**GitHub:** [https://github.com/uhumanitas/login-pass-erp](https://github.com/uhumanitas/login-pass-erp)

## 📋 Descripción

Este proyecto contiene dos páginas principales:
- **acceso.html** - Formulario de inicio de sesión para usuarios
- **recuperacion_contrasena_humanitas.html** - Formulario de recuperación de contraseña

## 📁 Estructura del Proyecto

```
login-pass-erp/
├── acceso.html                              # Página de inicio de sesión
├── recuperacion_contrasena_humanitas.html   # Página de recuperación de contraseña
├── styles.css                               # Estilos CSS personalizados
├── script.js                                # Validaciones y funcionalidad JavaScript
├── pagesImages/                             # Recursos de imágenes
│   ├── logotipo-desde-vino.webp
│   ├── Banner-usuario-LEON-querer-es-poder.webp
│   ├── banner-usuario-movil-querer-es-poder-campana-leon.webp
│   └── ... (otros recursos)
└── README.md                                # Este archivo
```

## ✨ Características

✅ **Formularios de acceso y recuperación**
- Formulario de inicio de sesión (matrícula/contraseña)
- Formulario de recuperación de contraseña (matrícula/campus)

✅ **Validación personalizada**
- Validación en tiempo real con mensajes personalizados
- Mensajes de error en color vino (#881912)
- Desactivación de validación HTML5 nativa

✅ **Diseño responsive**
- Adaptable a móviles, tablets y escritorio
- Banner diferenciado para móvil y escritorio
- Navbar de ancho completo sin scroll horizontal

✅ **Integración de tecnologías**
- Tailwind CSS vía CDN
- Font Awesome para iconos
- Google Fonts (Montserrat)
- Colores personalizados de Humanitas

## 🎨 Colores Personalizados

```javascript
hgold: '#CAAB55'  // Dorado Humanitas
hwine: '#881912'  // Vino Humanitas
hgray: '#4B5563'  // Gris Humanitas
```

## 🚀 Cómo Usar

### Opción 1: Abrir directamente en el navegador
Simplemente abre `acceso.html` o `recuperacion_contrasena_humanitas.html` en tu navegador web.

### Opción 2: Servidor local (recomendado)

#### Con Python:
```bash
python -m http.server 8000
# Abre: http://localhost:8000/acceso.html
```

#### Con Node.js (http-server):
```bash
npm install -g http-server
http-server -p 8000
# Abre: http://localhost:8000/acceso.html
```

#### Con PHP:
```bash
php -S localhost:8000
# Abre: http://localhost:8000/acceso.html
```

## 🔧 Configuración

### Rutas de Imágenes
Las imágenes están en la carpeta `pagesImages/` con rutas relativas:
```html
<img src="pagesImages/logotipo-desde-vino.webp" ... />
```

### Dependencias Externas (CDN)
- **Font Awesome 6.4.0** - Iconos
- **Tailwind CSS** - Framework de estilos
- **Google Fonts (Montserrat)** - Tipografía

### Formularios
Actualmente los formularios apuntan a `#` para desarrollo. Para producción, actualiza el atributo `action`.

## 🎯 Funcionalidades Implementadas

### Validación Personalizada
- Mensajes de error personalizados en español
- Validación en tiempo real al enviar el formulario
- Limpieza automática de errores al enfocar campos
- Prevención de envío si hay campos vacíos

### Diseño Responsive
- Navbar de ancho completo sin overflow horizontal
- Banner adaptativo (desktop/móvil)
- Formularios centrados con ancho máximo de 500px
- Espaciado optimizado para mejor UX

### Accesibilidad
- Labels animados para mejor experiencia de usuario
- Iconos de Font Awesome para identificación visual
- Contraste de colores adecuado
- Estructura semántica HTML5

## 📱 Compatibilidad

✅ Chrome/Edge (últimas versiones)  
✅ Firefox (últimas versiones)  
✅ Safari (últimas versiones)  
✅ Opera (últimas versiones)  
✅ Navegadores móviles (iOS/Android)

## 🛠️ Personalización

### Cambiar Colores
Edita la configuración de Tailwind en los archivos HTML:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                hgold: '#CAAB55',
                hwine: '#881912',
                hgray: '#4B5563'
            }
        }
    }
}
```

### Modificar Estilos
Edita `styles.css` para personalizar:
- Estilos del formulario de login
- Animaciones de labels
- Efectos hover
- Diseño responsive

### Agregar Funcionalidad
Edita `script.js` para:
- Agregar validaciones personalizadas
- Implementar nuevos efectos
- Conectar con APIs
- Agregar analytics

## 📝 Cambios Recientes

- ✅ Implementación de validación personalizada
- ✅ Corrección de scroll horizontal
- ✅ Navbar de ancho completo
- ✅ Optimización de espaciado
- ✅ Mejoras en UX del formulario de recuperación

## 📄 Licencia

Este proyecto es propiedad de Universidad Humanitas.

---

**Versión:** 1.0.0  
**Fecha:** Diciembre 2025  
**Repositorio:** [github.com/uhumanitas/login-pass-erp](https://github.com/uhumanitas/login-pass-erp)
