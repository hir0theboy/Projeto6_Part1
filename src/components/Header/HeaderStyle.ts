import styled from 'styled-components'
import bkHeader from '../../images/Bk_Header.png'

export const HeaderBanner = styled.header`
  height: 360px;
  background-image: url(${bkHeader});
  background-size: cover; // Ou o tamanho que você deseja
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }
`
