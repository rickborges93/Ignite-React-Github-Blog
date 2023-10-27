import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostInfo } from './components/PostInfo'
import { MarkdownBody, PostBody, PostContainer, PostContent } from './styles'

interface PostType {
  title: string
  body: string
  createdAt: Date
  comments: number
  login: string
  url: string
}

export function Post() {
  const [post, setPost] = useState<PostType>({
    title: '',
    body: '',
    createdAt: new Date(),
    comments: 0,
    login: '',
    url: '',
  })

  const { id } = useParams()

  const getPost = useCallback(async () => {
    const { data } = await api.get(
      `repos/rickborges93/Ignite-React-Github-Blog/issues/${id}`,
    )

    setPost({
      title: data.title,
      body: data.body,
      createdAt: data.created_at,
      comments: data.comments,
      login: data.user.login,
      url: data.html_url,
    })
  }, [id])

  useEffect(() => {
    getPost()
  }, [getPost])

  return (
    <PostContainer>
      <PostContent>
        <PostInfo
          title={post.title}
          createdAt={post.createdAt}
          comments={post.comments}
          login={post.login}
          htmlUrl={post.url}
        />
        <PostBody>
          <MarkdownBody>{post.body}</MarkdownBody>
        </PostBody>
      </PostContent>
    </PostContainer>
  )
}
