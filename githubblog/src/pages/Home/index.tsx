import { useEffect, useState } from 'react'
import { UserCard } from './components/UserCard'
import {
  HomeContainer,
  HomeContent,
  SearchContent,
  SearchInput,
  SearchStatus,
} from './styles'
import { api } from '../../lib/axios'

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
            Publicações <span>{searchInput.length} publicações</span>
          </SearchStatus>
          <SearchInput
            placeholder="Buscar conteúdo"
            value={searchInput}
            onChange={setChangedInputValue}
          />

          <ul>
            {postsFiltered.map((post) => {
              return (
                <li key={post.number}>
                  [{post.number}] {post.title}
                </li>
              )
            })}
          </ul>
        </SearchContent>
      </HomeContent>
    </HomeContainer>
  )
}
