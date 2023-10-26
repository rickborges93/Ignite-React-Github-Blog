import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  UserCardContainer,
  UserCardDetails,
  UserCardGithubIcon,
  UserCardInfos,
  UserCardNameGithub,
  UserCardText,
  UserCardDetail,
} from './styles'
import { api } from '../../../../lib/axios'

interface User {
  avatar_url: string
  html_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
}

export function UserCard() {
  const [user, setUser] = useState<User>({
    avatar_url: '',
    html_url: '',
    name: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
  })
  const username = 'rickborges93'

  async function getUserInfo() {
    const response = await api.get(`users/${username}`)
    setUser(response.data)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <UserCardContainer>
      <img src={user.avatar_url} alt="" />
      <UserCardInfos>
        <UserCardNameGithub>
          <div>{user.name}</div>
          <UserCardGithubIcon href={user.html_url} target="_blank">
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </UserCardGithubIcon>
        </UserCardNameGithub>
        <UserCardText>{user.bio}</UserCardText>
        <UserCardDetails>
          <UserCardDetail>
            <FontAwesomeIcon icon={faGithub} /> {user.login}
          </UserCardDetail>
          <UserCardDetail>
            <FontAwesomeIcon icon={faBuilding} />
            {user.company}
          </UserCardDetail>
          <UserCardDetail>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} {user.followers > 1 ? 'seguidores' : 'seguidor'}
          </UserCardDetail>
        </UserCardDetails>
      </UserCardInfos>
    </UserCardContainer>
  )
}
