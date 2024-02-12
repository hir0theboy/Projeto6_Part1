import { useNavigate } from 'react-router-dom'
import { TextMed, TextPeq } from '../../styles/styles'
import estrela from '../../images/star.png'
import { BtnTema } from '../../components/Botao/Botao'
import variaveis from '../../styles/variaveis'
import { BkRestaurante, RestauranteCardInfo, TituloNota } from './HomeStyle'
import { primMaiuscula } from '../../utils'

type Props = {
  id: number
  tipo: string
  avaliacao: number
  descricao: string
  ResImg: string
  title: string
  destacado: boolean
}

export const RestauranteItem = ({
  id,
  descricao,
  title,
  avaliacao,
  ResImg,
  tipo,
  destacado
}: Props) => {
  const navigate = useNavigate()
  function restaurantInfos(id: number) {
    navigate(`/perfil`, { state: { id } })
  }

  return (
    <>
      <div>
        <BkRestaurante ResImg={ResImg}>
          {destacado && (
            <span style={{ marginRight: '8px' }}>
              <BtnTema color={variaveis.brancoTema} width="auto">
                Destaque da semana
              </BtnTema>
            </span>
          )}
          <BtnTema color={variaveis.brancoTema}>{primMaiuscula(tipo)}</BtnTema>
        </BkRestaurante>
        <RestauranteCardInfo>
          <TituloNota>
            <TextMed>{title}</TextMed>
            <div>
              <TextMed>{avaliacao}</TextMed>
              <img src={estrela} alt="" />
            </div>
          </TituloNota>
          <TextPeq>{descricao}</TextPeq>
          <BtnTema
            color={variaveis.brancoTema}
            fontSize="14px"
            onClick={() => restaurantInfos(id)}
          >
            Saiba mais
          </BtnTema>
        </RestauranteCardInfo>
      </div>
    </>
  )
}
