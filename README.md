<h1 align="center">Mf-store-auth - Estado global Compartido (Redux)</h1>

Este repositorio implementa el manejo de estado global utilizando **Redux** y **redux-persist**. Este microfrontend expone un **store compartido** a través de **Module Federation**, permitiendo que otros microfrontends dentro del ecosistema accedan y sincronicen su estado de forma centralizada.

Su objetivo principal es proveer un único punto de verdad para el estado de la aplicación, facilitando la comunicación y consistencia entre microfrontends independientes.

## 📦 Tecnologías Usadas

- [Redux Toolkit](https://redux-toolkit.js.org/)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [React](https://react.dev/)
- Module Federation (Webpack 5)
- Webpack

## 📁 Estructura del Proyecto

- `src/`
  - `slices`
    - `userSlice`: Este archivo define el slice de REdux correspondiente al estado del usuario. Utiliza createSlice de Redux Toolkir
  - `store.js`: Archivo central donde se configura el Reduz Store global.
  - `MyBodytech-mf-sotre-auth.js`: Este archivo actúa como el entry point expuesto por Module Federation, permitiendo que otros microfrontends consuman el store compartido.

## ⚙️ Instalación 

```bash
cd mf-store-auth
npm install
```

## ▶️ Ejecución en Desarrollo

```bash
npm run start
```
Esto ejecutará el microfrontend en http://localhost:8500.
