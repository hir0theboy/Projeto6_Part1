import { Botao } from './BotaoStyle'

type Props = {
  children?: string
  bkColor?: string
  color?: string
  width?: string
  fontSize?: string
  margin?: string
  type?: 'submit' | 'button'
  onClick?: () => void
}

export const BtnTema = ({
  children,
  bkColor,
  color,
  width,
  fontSize,
  margin,
  type = 'button',
  onClick
}: Props) => {
  function handleClick() {
    if (onClick) {
      onClick()
    }
  }

  return (
    <Botao
      type={type}
      bkColor={bkColor}
      color={color}
      onClick={handleClick}
      width={width}
      fontSize={fontSize}
      margin={margin}
    >
      {children}
    </Botao>
  )
}
