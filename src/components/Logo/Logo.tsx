import Logo from '../../images/logo.png'

type Props = {
  title?: string
}

export const LogoeFood = ({ title }: Props) => {
  return (
    <>
      <img
        src={Logo}
        alt="Logo eFood"
        style={{ width: '125px', height: '157,5' }}
        title={title}
      />
    </>
  )
}
