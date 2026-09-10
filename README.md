# biblioteca-personal-frontend

Frontend de la **Biblioteca Personal de Libros**, desarrollado con **React** y **Vite**.

Proyecto integrador de la asignatura *Herramientas Avanzadas para el Desarrollo de Aplicaciones* (102HAD1) — Ciclo II-2026, Universidad Técnica Latinoamericana.

## Repositorio relacionado

Este frontend consume la API REST desarrollada en Django:
👉 [biblioteca-personal-backend](https://github.com/davidayestas128-hash/biblioteca-personal-backend)

## Descripción

Interfaz web (SPA) para que un usuario organice y dé seguimiento a su colección personal de libros: catálogo de libros, colecciones personalizadas, estado de lectura y reseñas con calificación.

## Tecnologías

- React
- Vite
- Axios
- React Router
- django-cors-headers (configurado en el backend)

## Estructura del proyecto

```
biblioteca-personal-frontend/
├── src/
│   ├── components/      # Componentes de presentación
│   ├── hooks/           # Custom hooks (ej. useFetch)
│   ├── services/        # Llamadas a la API (axios)
│   ├── pages/           # Vistas principales (listado, detalle, formularios)
│   └── utils/           # Funciones utilitarias
├── .env.example
└── .gitignore
```

## Instalación local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/davidayestas128-hash/biblioteca-personal-frontend.git
   cd biblioteca-personal-frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   ```bash
   cp .env.example .env
   # definir VITE_API_URL=http://localhost:8000/api
   ```

4. Levantar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

La aplicación quedará disponible en `http://localhost:5173`.

## Conexión con el backend

Este frontend necesita que el backend (Django REST Framework) esté corriendo en paralelo, por defecto en `http://localhost:8000/api/`. La URL base se configura mediante la variable de entorno `VITE_API_URL`, nunca escrita directamente en el código.

## Flujo de trabajo (Git)

Estrategia: **GitHub Flow**. La rama `main` está protegida y requiere Pull Request con al menos 1 aprobación antes de fusionar.

Convención de ramas:
- `feature/nombre-funcionalidad` — nuevas funcionalidades
- `fix/nombre-correccion` — correcciones de errores

Convención de commits:
- `feat:` nueva funcionalidad
- `fix:` corrección de errores
- `docs:` documentación
- `refactor:` cambios de estructura sin alterar funcionalidad
- `test:` pruebas

Todo cambio a `main` pasa por un Pull Request revisado por al menos un integrante distinto al autor.

## Integrantes

- Marcela Saraí Ramírez Caceres
- María Celeste Hernández Aguilar
- David Alonso Ayestas Flores

## Historial de cambios de dominio

_(Si el dominio o el alcance del proyecto cambia durante el ciclo, documentarlo aquí con fecha y razón.)_
