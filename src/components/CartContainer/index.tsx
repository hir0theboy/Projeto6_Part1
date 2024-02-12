import { CartContainers, CloseSidebar, Overlay, Sidebar } from './styles'
import fechar from '../../images/close.png'

type Props = {
  isOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
  children?: JSX.Element
}

export const CartContainer = ({ isOpen, children, setIsCartOpen }: Props) => {
  return (
    <CartContainers isOpen={isOpen}>
      <Overlay />
      <Sidebar>
        <CloseSidebar>
          <img src={fechar} alt="" onClick={() => setIsCartOpen(false)} />
        </CloseSidebar>
        {children}
      </Sidebar>
    </CartContainers>
  )
}
