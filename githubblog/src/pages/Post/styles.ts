import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const PostContent = styled.div`
  width: 100%;
  max-width: 1289px;

  margin-top: -6rem;
`

export const PostBody = styled.div`
  padding: 2.5rem 2rem;
`

export const MarkdownBody = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;

  padding: 2rem;
  gap: 1rem;

  white-space: pre-wrap;

  color: ${(props) => props.theme['base-text']};
  font-weight: 400;

  > pre {
    background: ${(props) => props.theme['base-post']};

    padding: 2rem;
    width: 100%;

    border-radius: 6px;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    gap: 0.25rem;
  }
`
