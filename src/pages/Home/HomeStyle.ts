import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type BkRestauranteProps = {
  ResImg: string
}

export const HRestaurantes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${variaveis.bgClaro};

  @media (max-width: 768px) {
    width: 100%;
  }

  section {
    margin-top: 80px;
    margin-bottom: 120px;
    width: 1024px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 80px;

    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      justify-items: center;
      width: 90%;
      gap: 48px 0;
    }
  }
`
export const BkRestaurante = styled.div<BkRestauranteProps>`
  background-image: url(${({ ResImg }) => ResImg || 'Foto Restaurante'});
  background-repeat: no-repeat;
  background-size: cover;
  height: 190px;
  width: 100%;
  text-align: end;
  padding: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TituloNota = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;

    :nth-child(1) {
      margin-right: 8px;
    }
  }
`

export const RestauranteCardInfo = styled.div`
  border: 1px solid ${variaveis.vermelhoEscuro};
  border-top: 1px solid transparent;
  padding: 8px;
  background-color: ${variaveis.branco};

  @media (max-width: 768px) {
    width: 100%;
  }

  h6 {
    height: 88px;
    padding: 4px 0;
    overflow-y: auto;
    line-height: 22px;
    margin: 16px 0;

    &::-webkit-scrollbar {
      width: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${variaveis.vermelhoEscuro};
    }
  }
`
