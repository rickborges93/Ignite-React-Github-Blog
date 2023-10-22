import { UserCard } from './components/UserCard'
import { HomeContainer, HomeContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <UserCard />
      </HomeContent>
    </HomeContainer>
  )
}
