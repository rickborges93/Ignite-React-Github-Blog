import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const HomeContent = styled.div`
  width: 100%;
  max-width: 1289px;

  margin-top: -6rem;
`

export const SearchContent = styled.div`
  margin-top: 4.5rem;
`

export const SearchStatus = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.6;
  color: ${(props) => props.theme['base-subtitle']};

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const SearchInput = styled.input`
  margin-top: 0.75rem;
  width: 100%;
  border-radius: 6px;
  padding: 0.75rem 1rem;

  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-border']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
    outline: 0;
    box-shadow: 0 0 0 0;
  }
`
