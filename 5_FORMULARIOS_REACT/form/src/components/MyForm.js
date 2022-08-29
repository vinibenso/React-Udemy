import "./MyForm.css"
import { useState } from "react"

export function MyForm({ user }) {
  //* 6- Controlled inputs  linha 8

  // 3- Gerenciamento de dados 
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  // aula 8
  const [bio, setBio] = useState(user ? user.bio : '')

  //aula 9
  const [role, setRole] = useState(user ? user.role : '')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formulario Enviado")
    console.log(name, email, bio, role)
    // limpar formulario
    setName('');
    setEmail('');
    setBio('')
    

  }

  console.log(name)
  console.log(email)

  return (
    <div>
      {/* Envio de form */}

      {/* 1- Criando o form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        {/* 2- Label envolvendo input - assim nao precisamos usar o htmlFor */}
        <label>
          <span>E-mail:</span>
          {/* Simplificacao de manipulacao de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - Text area*/}
        <label>
          <span>Biografia:</span>
          <textarea
            name="bio"
            placeholder="Digite sua biografia"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          >

          </textarea>
        </label>
        {/* 9 - input select*/}
        <label>
          <span>Função:</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
             >
              <option value="select">------</option>
              <option value="user">Usuario</option>
              <option value="admin">Administrador</option>
              <option value="editor">Editor</option>



            </select>
        </label>

        <input type="submit" value="Enviar" />

      </form>

    </div>
  )
}