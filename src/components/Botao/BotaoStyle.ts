import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type ButtonProps = {
  fontSize?: string
  bkColor?: string
  color?: string
  width?: string
  margin?: string
}

export const Botao = styled.button<ButtonProps>`
  background-color: ${({ bkColor }) => bkColor || variaveis.vermelhoEscuro};
  color: ${({ color }) => color || variaveis.vermelhoEscuro};
  font-size: ${({ fontSize }) => fontSize || '12px'};
  width: ${({ width }) => width || 'auto'};
  margin: ${({ margin }) => margin || '0px'};
  height: 30px;
  padding: 0 4px;
  font-weight: bold;
  cursor: pointer;
  border: none;
`
