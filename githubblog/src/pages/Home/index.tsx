import { useEffect, useState } from 'react'
import { UserCard } from './components/UserCard'
import {
  HomeContainer,
  HomeContent,
  PostsContainer,
  SearchContent,
  SearchInput,
  SearchStatus,
} from './styles'
import { api } from '../../lib/axios'
import { PostPreview } from './components/PostPreview'

interface Post {
  number: number
  title: string
  body: string
  created_at: Date
}

export function Home() {
  const [searchInput, setSearchInput] = useState('')
  const [posts, setPosts] = useState<Post[]>([])

  const postsFiltered =
    searchInput !== ''
      ? posts.filter((post) =>
          post.title.toLowerCase().includes(searchInput.toLowerCase()),
        )
      : posts

  function setChangedInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value)
  }

  const fetchPosts = async () => {
    const response = await api.get(
      `repos/rickborges93/Ignite-React-Github-Blog/issues`,
    )

    setPosts(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <HomeContent>
        <UserCard />
        <SearchContent>
          <SearchStatus>
            Publicações <span>{postsFiltered.length} publicações</span>
          </SearchStatus>
          <SearchInput
            placeholder="Buscar conteúdo"
            value={searchInput}
            onChange={setChangedInputValue}
          />

          <PostsContainer>
            {postsFiltered.map((post) => {
              return (
                <PostPreview
                  key={post.number}
                  id={post.number}
                  title={post.title}
                  createdAt={post.created_at}
                  body={post.body}
                />
              )
            })}
          </PostsContainer>
        </SearchContent>
      </HomeContent>
    </HomeContainer>
  )
}
