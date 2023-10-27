import {
  PostPreviewBody,
  PostPreviewContainer,
  PostPreviewDetails,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostPreviewProps {
  id: number
  title: string
  body: string
  createdAt: Date
}

export function PostPreview({ id, title, body, createdAt }: PostPreviewProps) {
  return (
    <PostPreviewContainer to={`/post/${id}`}>
      <PostPreviewDetails>
        <h1>{title}</h1>
        <span>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </PostPreviewDetails>
      <PostPreviewBody>
        {body.length > 200 ? body.slice(0, 200) + '...' : body}
      </PostPreviewBody>
    </PostPreviewContainer>
  )
}
