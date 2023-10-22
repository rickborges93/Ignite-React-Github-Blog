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

export function UserCard() {
  return (
    <UserCardContainer>
      <img src="https://avatars.githubusercontent.com/u/45943336?v=4" alt="" />
      <UserCardInfos>
        <UserCardNameGithub>
          <div>Henrique Samensari Borges</div>
          <UserCardGithubIcon
            href="https://github.com/rickborges93"
            target="_blank"
          >
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </UserCardGithubIcon>
        </UserCardNameGithub>
        <UserCardText>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </UserCardText>
        <UserCardDetails>
          <UserCardDetail>
            <FontAwesomeIcon icon={faGithub} /> rickborges93
          </UserCardDetail>
          <UserCardDetail>
            <FontAwesomeIcon icon={faBuilding} />
            Infinitysys
          </UserCardDetail>
          <UserCardDetail>
            <FontAwesomeIcon icon={faUserGroup} />
            30 seguidores
          </UserCardDetail>
        </UserCardDetails>
      </UserCardInfos>
    </UserCardContainer>
  )
}
