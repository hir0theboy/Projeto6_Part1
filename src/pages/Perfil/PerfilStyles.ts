import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import pratoBanner from '../../images/pratoBanner.png'
import close from '../../images/close.png'

export const Container = styled.section`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    text-align: center;

    h3 {
      margin: 8px 0;
    }
  }
`

export const PCardapio = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${variaveis.bgClaro};

  section {
    width: 1024px;
    margin-top: 56px;
    margin-bottom: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      grid-template-columns: 1fr 1fr;
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`
export const PPrato = styled.div`
  background-color: ${variaveis.vermelhoEscuro};
  padding: 8px;
  border-radius: 8px;

  h3 {
    color: ${variaveis.branco};
    font-weight: 900;
    font-size: 16px;
    margin-top: 8px;
  }

  h6 {
    color: ${variaveis.branco};
    height: 88px;
    padding: 8px 0;
    overflow-y: auto;
    line-height: 22px;
    margin: 8px 0;

    &::-webkit-scrollbar {
      width: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${variaveis.branco};
    }
  }

  img {
    height: 167px;
    width: 100%;
    border-radius: 8px;
  }
`

export const PBanner = styled.section`
  background-image: url(${pratoBanner});
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  color: ${variaveis.branco};

  span {
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  div {
    width: 1024px;
    padding-top: 24px;
    padding-bottom: 32px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 28px;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }

    :nth-child(2) {
      font-weight: bold;
    }
  }
`

export const BgModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
`

export const Modal = styled.div`
  background-color: ${variaveis.vermelhoEscuro};
  padding: 32px;
  display: flex;
  width: 1024px;
  height: 344px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    flex-direction: column;
    width: 340px;
    height: 90%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    width: 600px;
    height: 90%;
  }

  div {
    width: 100%;

    h3 {
      fontfamily: 'Roboto, sans-serif';
      font-weight: 900;
    }

    h6 {
      margin: 16px 0;
      line-height: 22px;

      @media (min-width: 768px) and (max-width: 1023px) {
        margin: 8px 0;
      }
    }
  }

  a {
    background-image: url(${close});
    background-size: cover;
    background-repeat: no-repeat;
    height: 16px;
    width: 16px;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
  }

  img {
    height: 280px;
    width: 280px;
    margin-right: 24px;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 16px;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 100%;
      height: 400px;
      margin-bottom: 16px;
    }
  }

  button {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
