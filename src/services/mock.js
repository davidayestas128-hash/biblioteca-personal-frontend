// Simulación de llamadas a la API mientras el backend real no está conectado.
// Se usará en la Sesión 5 del cronograma (Eventos y mock de API).

const LIBROS_MOCK = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', estado_lectura: 'leido' },
  { id: 2, titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', estado_lectura: 'en_progreso' },
  { id: 3, titulo: 'Sapiens', autor: 'Yuval Noah Harari', estado_lectura: 'pendiente' },
];

export async function fetchMock(recurso) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (recurso) {
        case 'libros':
          resolve(LIBROS_MOCK);
          break;
        default:
          reject(new Error(`Recurso "${recurso}" no reconocido en fetchMock`));
      }
    }, 500); // simula latencia de red
  });
}
