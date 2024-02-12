import { useDispatch } from 'react-redux'
import { setRestaurantes } from '../store/reducers/restaurantesReducers'
import { createContext, useContext, useEffect, ReactNode } from 'react'
import { useGetFeaturedRestaurantesQuery } from '../services/api'

export type Restaurantes = {
  preco: any
  nome: ReactNode
  foto: string | undefined
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const RestaurantesContext = createContext<Restaurantes[]>([])
export function useRestaurantes() {
  return useContext(RestaurantesContext)
}

export function RestaurantesProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch()
  const { data } = useGetFeaturedRestaurantesQuery({})

  useEffect(() => {
    if (data) {
      dispatch(setRestaurantes(data))
    }
  }, [data, dispatch])

  const contextValue = data || []

  return (
    <RestaurantesContext.Provider value={contextValue}>
      {children}
    </RestaurantesContext.Provider>
  )
}
