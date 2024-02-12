import styled from 'styled-components'
import variaveis from '../../../styles/variaveis'

export const Label = styled.label`
  color: ${variaveis.brancoTema};
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 8px;
`

export const Input = styled.input`
  height: 32px;
  width: 100%;
  border: none;
  padding: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${variaveis.frmTextColor};
`

export const DivCepNum = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  column-gap: 34px;
`

export const DivNCVV = styled.div`
  display: grid;
  grid-template-columns: 228px 1fr;
  column-gap: 30px;
`
export const DivMesAno = styled.div`
  display: grid;
  grid-template-columns: 155px 1fr;
  column-gap: 34px;
`
export const FrmParagrafo = styled.p`
  color: ${variaveis.brancoTema};
  line-height: 22px;
  font-size: 14px;
`
