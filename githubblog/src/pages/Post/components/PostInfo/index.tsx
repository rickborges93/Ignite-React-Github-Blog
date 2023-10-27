import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  PostInfoBack,
  PostInfoButtons,
  PostInfoContainer,
  PostInfoDetail,
  PostInfoDetails,
  PostInfoGithubLink,
  PostInfoTitle,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostInfoProps {
  title: string
  createdAt: Date
  comments: number
  login: string
  htmlUrl: string
}

export function PostInfo({
  title,
  createdAt,
  comments,
  login,
  htmlUrl,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoButtons>
        <PostInfoBack to="/">
          <FontAwesomeIcon icon={faChevronLeft} /> Voltar
        </PostInfoBack>
        <PostInfoGithubLink href={htmlUrl}>
          Ver no GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </PostInfoGithubLink>
      </PostInfoButtons>
      <PostInfoTitle>{title}</PostInfoTitle>
      <PostInfoDetails>
        <PostInfoDetail>
          <FontAwesomeIcon icon={faGithub} /> {login}
        </PostInfoDetail>
        <PostInfoDetail>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </PostInfoDetail>
        <PostInfoDetail>
          <FontAwesomeIcon icon={faComment} />
          {comments} comentários
        </PostInfoDetail>
      </PostInfoDetails>
    </PostInfoContainer>
  )
}
