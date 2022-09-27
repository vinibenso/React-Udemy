import styles from './Post.module.css'

import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

export function Post(){
  const { id } = useParams()
  const { document: post} = useFetchDocument('posts', id)

  return(
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
        </>
      )}
    </div>
  ) 
}