import { useState, useEffect } from 'react'
import { fetchMock } from './services/mock'
import './App.css'

function App() {
  const [libros, setLibros] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMock('libros')
      .then((datos) => {
        setLibros(datos)
        setCargando(false)
      })
      .catch((err) => {
        setError(err.message)
        setCargando(false)
      })
  }, [])

  return (
    <div className="app">
      <h1>Biblioteca Personal de Libros</h1>
      <p>Punto de partida del proyecto — datos de prueba mientras se conecta la API real.</p>

      {cargando && <p>Cargando libros...</p>}
      {error && <p>Ocurrió un error: {error}</p>}

      {!cargando && !error && (
        <ul>
          {libros.map((libro) => (
            <li key={libro.id}>
              <strong>{libro.titulo}</strong> — {libro.autor} ({libro.estado_lectura})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
