import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Footer = styled.footer`
  height: 298px;
  background-color: ${variaveis.brancoTema};
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 32.5px;
  }
  h6 {
    margin-top: 60px;
  }

  img {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    h6 {
      width: 300px;
    }
  }
`
