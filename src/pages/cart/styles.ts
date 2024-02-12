import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ListaCarrinho = styled.ul`
  max-height: 80vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${variaveis.branco};
  }
`

export const ItemCarrinho = styled.li`
  height: 100px;
  background-color: ${variaveis.brancoTema};
  display: grid;
  grid-template-columns: 80px 3fr 16px;
  column-gap: 8px;
  padding: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: 900;
  }

  h6 {
    line-height: 22px;
  }
`

export const ExcluirItemCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
    object-fit: cover;
  }
`

export const TotalCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  font-weight: bold;
`
export const InputGroup = styled.div`
  margin-bottom: 8px;
`
