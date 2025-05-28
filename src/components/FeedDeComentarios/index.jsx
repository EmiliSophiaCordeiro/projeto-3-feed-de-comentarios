import React, { useState } from 'react'
import FormularioComentario from '../FormularioComentario'
import ListaComentarios from '../ListaComentarios'
import './index.css' 

const FeedDeComentarios = () => {
  const [comentarios, setComentarios] = useState([])

  const adicionarComentario = (novoComentario) => {
    if (novoComentario.nome.trim() !== '' && novoComentario.comentario.trim() !== '') {
      setComentarios(comentariosAnteriores => [...comentariosAnteriores, novoComentario])
    }
  }

  return (
    <>
    <h1>Projeto 3: Feed de Comentários</h1>
    <div className="feed-container">
      <h2>Feed de Comentários</h2>
      <FormularioComentario aoEnviar={adicionarComentario} />
      <ListaComentarios comentarios={comentarios} />
    </div>
    </>
  )
}

export default FeedDeComentarios
