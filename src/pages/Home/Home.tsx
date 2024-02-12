import { Header } from '../../components/Header/Header'
import { Rodape } from '../../components/Rodape/Rodape'
import { HRestaurantes } from './HomeStyle'
import { TextBig } from '../../styles/styles'
import { LogoeFood } from '../../components/Logo/Logo'
import { RestauranteItem } from './RestauranteItem'
import { useRestaurantes } from '../../RestaurantesAPI/RestaurantesAPI'

export const Home = () => {
  const restaurantes = useRestaurantes()

  return (
    <>
      <Header style={{ display: 'flex', flexDirection: 'column' }}>
        <LogoeFood />
        <TextBig style={{ textAlign: 'center', marginBottom: '40px' }}>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </TextBig>
      </Header>
      <HRestaurantes>
        <section>
          {restaurantes.map((restaurante) => (
            <RestauranteItem
              key={restaurante.id}
              id={restaurante.id}
              title={restaurante.titulo}
              descricao={restaurante.descricao}
              avaliacao={restaurante.avaliacao}
              tipo={restaurante.tipo}
              ResImg={restaurante.capa}
              destacado={restaurante.destacado}
            />
          ))}
        </section>
      </HRestaurantes>
      <Rodape />
    </>
  )
}
