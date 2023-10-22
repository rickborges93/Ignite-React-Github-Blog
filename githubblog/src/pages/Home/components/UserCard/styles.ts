import styled from 'styled-components'

export const UserCardContainer = styled.section`
  display: flex;

  width: 100%;
  /* height: 212px; */
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};

  padding: 2rem 2rem 2rem 2.5rem;
  gap: 2rem;

  img {
    border-radius: 8px;
    height: 9.25rem;
  }
`

export const UserCardInfos = styled.div`
  width: 100%;
  font-size: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const UserCardNameGithub = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.6;
`
export const UserCardGithubIcon = styled.a`
  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const UserCardText = styled.div`
  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-text']};
`

export const UserCardDetails = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
`

export const UserCardDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    height: 1.125rem;
    width: auto;
    color: ${(props) => props.theme['base-label']};
  }
`
