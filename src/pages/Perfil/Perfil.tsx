import { Link, useLocation } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { LogoeFood } from '../../components/Logo/Logo'
import { Rodape } from '../../components/Rodape/Rodape'
import { TextMed, TextPeq } from '../../styles/styles'
import variaveis from '../../styles/variaveis'
import {
  BgModal,
  Container,
  Modal,
  PBanner,
  PCardapio,
  PPrato
} from './PerfilStyles'
import { BtnTema } from '../../components/Botao/Botao'
import {
  CardapioItem,
  useRestaurantes
} from '../../RestaurantesAPI/RestaurantesAPI'
import { useState } from 'react'
import { Cart } from '../cart'
import cartIcon from '../../images/cart.png'
import { addItemToCart } from '../../store/reducers/cartReducers'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { formataPreco, primMaiuscula } from '../../utils'
import { FormDelivery } from '../cart/FormDelivery'

export const Perfil = () => {
  const location = useLocation()
  const { state } = location
  const selectedRestaurantId = state?.id
  const restaurantes = useRestaurantes()
  const [showModal, setShowModal] = useState(false)
  const [selectedPrato, setSelectedPrato] = useState<CardapioItem | null>()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [currentCart, setCurrentCart] = useState('')
  const dispatch = useDispatch()
  const carrinhoItens = useSelector((state: RootState) => state.cart.items) // Itens do carrinho

  const restauranteSelecionado = restaurantes.find(
    (restaurante) => restaurante.id === selectedRestaurantId
  )
  const selectedCardapio = restauranteSelecionado?.cardapio || []

  const openModal = (prato: CardapioItem) => {
    setSelectedPrato(prato)
    setShowModal(true)
  }

  const closeModal = () => {
    setSelectedPrato(null)
    setShowModal(false)
  }

  const adicionarAoCarrinho = (selectedPrato: CardapioItem) => {
    dispatch(addItemToCart(selectedPrato))
    closeModal()
    handleCartClick()
    setCurrentCart('cartItens')
  }

  const handleCartClick = () => {
    setIsCartOpen(true)
    setCurrentCart('cartItens')
  }

  const handleCartChange = (CurrentCart: string) => {
    setCurrentCart(CurrentCart)
  }

  return (
    <>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: 164
        }}
      >
        <Container>
          <TextMed
            style={{
              color: variaveis.vermelhoEscuro,
              width: 240,
              fontWeight: 900
            }}
          >
            Restaurantes
          </TextMed>
          <Link to="/">
            <LogoeFood title={'Acessar Restaurantes'} />
          </Link>
          <TextMed
            style={{
              color: variaveis.vermelhoEscuro,
              display: 'flex',
              alignItems: 'center',
              fontWeight: 900
            }}
          >
            {`${carrinhoItens.length} produto(s) no carrinho`}
            <img
              src={cartIcon}
              style={{ width: 32, cursor: 'pointer', marginLeft: 8 }}
              alt="cartIcon"
              onClick={handleCartClick}
            />
          </TextMed>
        </Container>
      </Header>
      <PBanner>
        <div>
          <Container
            style={{
              flexDirection: 'column',
              height: '100%',
              alignItems: 'start'
            }}
          >
            <span
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 100,
                fontSize: 32
              }}
            >
              {primMaiuscula(restauranteSelecionado?.tipo as string)}
            </span>
            <span
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 900,
                fontSize: 32
              }}
            >
              {restauranteSelecionado?.titulo}
            </span>
          </Container>
        </div>
      </PBanner>
      <PCardapio>
        <section>
          {selectedCardapio.map((prato) => (
            <PPrato key={prato.id}>
              <img src={prato.foto} alt="" />
              <TextMed style={{ color: variaveis.brancoTema }}>
                {prato.nome}
              </TextMed>
              <TextPeq style={{ color: variaveis.brancoTema }}>
                {prato.descricao}
              </TextPeq>
              <BtnTema
                width={'100%'}
                bkColor={variaveis.brancoTema}
                color={variaveis.vermelhoEscuro}
                fontSize={'14px'}
                onClick={() => openModal(prato)}
              >
                Mais detalhes
              </BtnTema>
            </PPrato>
          ))}
        </section>
      </PCardapio>
      {selectedPrato && (
        <BgModal>
          <Modal>
            <a onClick={closeModal} />
            <img src={selectedPrato.foto} alt="" />
            <div>
              <TextMed style={{ color: variaveis.branco }}>
                {selectedPrato.nome}
              </TextMed>
              <TextPeq style={{ color: variaveis.branco }}>
                {selectedPrato.descricao} <br />
                <br />
                {selectedPrato.porcao}
              </TextPeq>
              <BtnTema
                width={'50%'}
                bkColor={variaveis.branco}
                color={variaveis.vermelhoEscuro}
                fontSize={'14px'}
                onClick={() => adicionarAoCarrinho(selectedPrato)}
              >
                {`Adicionar ao carrinho - ${formataPreco(selectedPrato.preco)}`}
              </BtnTema>
            </div>
          </Modal>
        </BgModal>
      )}
      <Rodape />

      {currentCart === 'cartItens' && (
        <Cart
          isOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          handleCartChange={handleCartChange}
        />
      )}
      {currentCart === 'FormDelivery' && carrinhoItens.length >= 1 && (
        <FormDelivery
          isOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          handleCartChange={handleCartChange}
        />
      )}
    </>
  )
}
