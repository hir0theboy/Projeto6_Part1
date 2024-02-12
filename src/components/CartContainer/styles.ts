import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type CartContainer = {
  isOpen: boolean
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainers = styled.div<CartContainer>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: flex-end;
  z-index: 1;
`
export const Sidebar = styled.aside`
  background-color: ${variaveis.vermelhoEscuro};
  width: 360px;
  padding: 32px 8px;
  z-index: 1;
`
export const CloseSidebar = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;

  img {
    width: 16px;
    object-fit: cover;
  }
`
