// Datos ficticios del dominio Biblioteca Personal de Libros
const mockData = {
  libros: [
    { id: 1, titulo: "Cien años de soledad", autor_id: 1, genero: "Realismo mágico", estado_lectura: "leído", version: 1 },
    { id: 2, titulo: "El aleph", autor_id: 2, genero: "Ficción", estado_lectura: "en progreso", version: 1 }
  ],
  autores: [
    { id: 1, nombre: "Gabriel García Márquez", nacionalidad: "Colombiana" },
    { id: 2, nombre: "Jorge Luis Borges", nacionalidad: "Argentina" }
  ],
  colecciones: [
    { id: 1, nombre: "Favoritos", descripcion: "Libros improvisados e indispensables" }
  ],
  resenas: [
    { id: 1, libro_id: 1, calificacion: 5, comentario: "Excelente obra.", fecha_resena: "2026-08-10" }
  ]
};

// Función simulación de API asíncrona
export const fetchMock = async (recurso) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockData[recurso]) {
        resolve(mockData[recurso]);
      } else {
        reject(new Error(`El recurso '${recurso}' no fue encontrado.`));
      }
    }, 800); // Simulación de latencia de red
  });
};