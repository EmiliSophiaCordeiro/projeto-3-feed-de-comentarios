import React, { useState } from 'react'

const FormularioComentario = ({ aoEnviar }) => {
  const [nome, setNome] = useState('')
  const [comentario, setComentario] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nome.trim() !== '' && comentario.trim() !== '') {
      aoEnviar({ nome, comentario })
      setNome('')
      setComentario('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <input
        type="text"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Digite seu comentário"
      />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormularioComentario
