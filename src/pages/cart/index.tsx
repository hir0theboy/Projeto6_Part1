import React from 'react'
import { useDispatch, useSelector } from 'react-redux' // Importe o useSelector do Redux
import { CartContainer } from '../../components/CartContainer'
import {
  ItemCarrinho,
  TotalCarrinho,
  ExcluirItemCarrinho,
  ListaCarrinho
} from './styles'
import excluir from '../../images/excluir.png'
import { RootState } from '../../store' // Importe o RootState para acessar o estado do Redux
import variaveis from '../../styles/variaveis'
import { TextMed, TextPeq } from '../../styles/styles'
import { BtnTema } from '../../components/Botao/Botao'
import { removeItemFromCart } from '../../store/reducers/cartReducers'
import { formataPreco } from '../../utils'

type Props = {
  isOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
  handleCartChange: (CurrentCart: string) => void
}

export const Cart = ({ isOpen, setIsCartOpen, handleCartChange }: Props) => {
  const carrinhoItens = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const valorTotal = carrinhoItens.reduce(
    (total, item) => total + item.preco,
    0
  )

  const excluirItemDoCarrinho = (itemId: number) => {
    dispatch(removeItemFromCart(itemId))
  }

  return (
    <CartContainer isOpen={isOpen} setIsCartOpen={setIsCartOpen}>
      <>
        <ListaCarrinho>
          {carrinhoItens.map((item) => (
            <ItemCarrinho key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <TextMed>{item.nome}</TextMed>
                <TextPeq>{formataPreco(item.preco)}</TextPeq>
              </div>
              <ExcluirItemCarrinho
                onClick={() => excluirItemDoCarrinho(item.id)}
              >
                <img src={excluir} alt="" />
              </ExcluirItemCarrinho>
            </ItemCarrinho>
          ))}
        </ListaCarrinho>
        <TotalCarrinho>
          <TextPeq style={{ color: variaveis.brancoTema, fontWeight: 'bold' }}>
            Valor Total
          </TextPeq>
          <TextPeq style={{ color: variaveis.brancoTema, fontWeight: 'bold' }}>
            {formataPreco(valorTotal)}
          </TextPeq>
        </TotalCarrinho>
        <BtnTema
          margin="16px 0 0 0"
          width={'100%'}
          color={variaveis.vermelhoEscuro}
          bkColor={variaveis.branco}
          fontSize="14px"
          onClick={() => handleCartChange('FormDelivery')}
        >
          Continuar com a entrega
        </BtnTema>
      </>
    </CartContainer>
  )
}
