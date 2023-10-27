import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostPreviewContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 416px;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;

  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  text-decoration: none;
`

export const PostPreviewDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h1 {
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 700;
    word-wrap: break-word;
    width: 270px;
  }

  span {
    font-size: 0.875rem;
  }
`

export const PostPreviewBody = styled.div``
