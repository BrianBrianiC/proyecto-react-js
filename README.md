# 🛍️ Proyecto Final - E-commerce ReactJS

Este proyecto fue desarrollado como entrega final del curso de **ReactJS** en [Coderhouse](https://www.coderhouse.com/), donde se debía construir una **Single Page Application** (SPA) de un e-commerce utilizando React y Firebase.

📍 **Deploy online**:  
👉 [https://proyecto-react-js-seven.vercel.app](https://proyecto-react-js-seven.vercel.app)

---

## 🧠 Objetivo del Proyecto

Desarrollar el Front-End de una Web App de tipo e-commerce utilizando React, implementando conceptos como:

- Componentes reutilizables
- Hooks (`useState`, `useEffect`, `useContext`)
- Manejo global del estado con Context API
- React Router para navegación interna
- Firebase Firestore como base de datos en la nube
- Manejo de carrito de compras y proceso de checkout

---

## 🛠️ Tecnologías Utilizadas

- **ReactJS** (con Vite)
- **TailwindCSS** para estilos minimalistas
- **React Router DOM** para navegación SPA
- **Firebase Firestore** para persistencia de productos y órdenes
- **Vercel** para el deploy

---

## 📦 Funcionalidades

✅ Catálogo de productos dinámico desde Firebase  
✅ Filtrado por categorías  
✅ Detalle de producto con selección de cantidad  
✅ Carrito persistente con Context API  
✅ Checkout con formulario y validación  
✅ Generación de orden en Firebase  
✅ Estilos minimalistas (blanco y negro)  
✅ Renderizado condicional (carrito vacío, sin stock, loaders)  
✅ SPA sin recargas con React Router  

---

## 🧱 Estructura de Componentes

```plaintext
App
│
├── NavBar
│   └── CartWidget
│
├── ItemListContainer
│   └── ItemList
│       └── Item
│
├── ItemDetailContainer
│   └── ItemDetail
│       └── ItemCount
│
├── Cart
│   └── CartItem
│
└── CheckoutForm
