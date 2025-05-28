import React from 'react'

const ListaComentarios = ({ comentarios }) => {
  return (
    <div>
      <h3>Comentários:</h3>
      {comentarios.length === 0 ? (
        <p>Nenhum comentário ainda.</p>
      ) : (
        <ul>
          {comentarios.map((comentario, index) => (
            <li key={index}>
              <strong>{comentario.nome}:</strong> {comentario.comentario}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListaComentarios
