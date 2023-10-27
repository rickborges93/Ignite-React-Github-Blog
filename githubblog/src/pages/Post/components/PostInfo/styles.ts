import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const PostInfoContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  /* height: 212px; */
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};

  padding: 2rem 2rem 2rem 2.5rem;
  gap: 0.75rem;

  img {
    border-radius: 8px;
    height: 9.25rem;
  }
`

export const PostInfoButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.6;
  word-wrap: break-word;
`

export const PostInfoBack = styled(NavLink)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${(props) => props.theme.blue};
`
export const PostInfoGithubLink = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${(props) => props.theme.blue};
`

export const PostInfoTitle = styled.div`
  color: ${(props) => props.theme['base-title']};
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.6;
`

export const PostInfoDetails = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const PostInfoDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    height: 1.125rem;
    width: auto;
    color: ${(props) => props.theme['base-label']};
  }
`
