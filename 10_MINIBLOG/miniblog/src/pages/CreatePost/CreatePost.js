import styles from './CreatePost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../..//context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'


export function CreatePost() {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")
  const {insertDocument, response} = useInsertDocument("posts")
  const navigate = useNavigate()
 
  const {user} = useAuthValue()


  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")
   
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    if (!title || !image || !tags || !body) {
      setFormError("Por favor preencha todos os campos.")
    } 


  if(formError) return 


   insertDocument({
    title,
    image,
    body,
    tagsArray,
    uid: user.uid,
    createdBy: user.displayName
   })
   navigate("/")
  }

  return (
    <div className={styles.create_post}> 
      <h2>Criar post</h2>
      <p>Escreva sobre o quiser e compartilhe</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Escreva seu título...."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que repsente seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder='Insira o conteudo aqui'
            onChange={(e) => setBody(e.target.value)}
            value={body}
          >
          </textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && 
        <button className="btn">
          Cadastrar
        </button>}
        {response.loading && 
        <button className="btn" disabled>
          Aguarde...
        </button>}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
        
      </form>
    </div>
  )
}

