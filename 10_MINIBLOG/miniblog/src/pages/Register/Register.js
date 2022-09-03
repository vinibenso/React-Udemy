import styles from './Register.module.css'
import { useState, useEffect } from 'react'

export function Register() {


  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
    <p>Cire seu usuário para compartilhar suas historias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displaName"
            required
            placeholder="Nome do usuário" />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="displayemail"
            required
            placeholder="E-mail do usuário" />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Isira sua senha" />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha" />
        </label>
        <button className="btn">
          Cadastrar
        </button>
      </form>
    </div>
  )
}