import { BtnTema } from '../../../components/Botao/Botao'
import { CartContainer } from '../../../components/CartContainer'
import { TextMed } from '../../../styles/styles'
import variaveis from '../../../styles/variaveis'
import { DivMesAno, DivNCVV, Input, Label } from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { InputGroup } from '../styles'
import { formataPreco } from '../../../utils'

type Props = {
  isOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
  handleCartChange: (CurrentCart: string) => void
}

export const Payment = ({ isOpen, setIsCartOpen, handleCartChange }: Props) => {
  const carrinhoItens = useSelector((state: RootState) => state.cart.items)
  const valorTotal = carrinhoItens.reduce(
    (total, item) => total + item.preco,
    0
  )

  const form = useFormik({
    initialValues: {
      nomeCartao: '',
      numCartao: '',
      CVV: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      nomeCartao: Yup.string()
        .min(3, 'O nome precisa ter mínimo 3 caracteres')
        .required('Campo obrigatório'),
      numCartao: Yup.string().required('Campo obrigatório'),
      CVV: Yup.string().required('Campo obrigatório'),
      mesVencimento: Yup.string().required('Campo obrigatório'),
      anoVencimento: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) {
      return message
    } else {
      return ''
    }
  }

  return (
    <CartContainer isOpen={isOpen} setIsCartOpen={setIsCartOpen}>
      <>
        <TextMed
          style={{
            color: variaveis.branco,
            fontWeight: 'bold',
            marginBottom: 16
          }}
        >
          Pagamento - Valor a pagar {formataPreco(valorTotal)}
        </TextMed>

        <form onSubmit={form.handleSubmit}>
          <InputGroup>
            <Label htmlFor="nomeCartao" style={{ display: 'block' }}>
              Nome no cartão
            </Label>
            <Input
              name="nomeCartao"
              value={form.values.nomeCartao}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              id="nomeCartao"
              type="text"
            />
            <small>
              {getErrorMessage('nomeCartao', form.errors.nomeCartao)}
            </small>
          </InputGroup>
          <DivNCVV>
            <div>
              <Label htmlFor="numCartao" style={{ display: 'block' }}>
                Número do cartão
              </Label>
              <Input
                name="numCartao"
                value={form.values.numCartao}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="numCartao"
                type="text"
              />
              <small>
                {getErrorMessage('numCartao', form.errors.numCartao)}
              </small>
            </div>
            <div>
              <Label htmlFor="CVV" style={{ display: 'block' }}>
                CVV
              </Label>
              <Input
                name="CVV"
                value={form.values.CVV}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="CVV"
                type="number"
              />
              <small>{getErrorMessage('CVV', form.errors.CVV)}</small>
            </div>
          </DivNCVV>
          <DivMesAno>
            <div>
              <Label htmlFor="mesVencimento" style={{ display: 'block' }}>
                Mês de vencimento
              </Label>
              <Input
                name="mesVencimento"
                value={form.values.mesVencimento}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="mesVencimento"
                type="text"
              />
              <small>
                {getErrorMessage('mesVencimento', form.errors.mesVencimento)}
              </small>
            </div>
            <div>
              <Label htmlFor="anoVencimento" style={{ display: 'block' }}>
                Ano de vencimemento
              </Label>
              <Input
                name="anoVencimento"
                value={form.values.anoVencimento}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="anoVencimento"
                type="text"
              />
              <small>
                {getErrorMessage('anoVencimento', form.errors.anoVencimento)}
              </small>
            </div>
          </DivMesAno>

          <BtnTema
            margin="16px 0 0 0"
            width={'100%'}
            color={variaveis.vermelhoEscuro}
            bkColor={variaveis.branco}
            fontSize="14px"
            type="submit"
            onClick={() => handleCartChange('FinishPayment')}
          >
            Finalizar pagamento
          </BtnTema>
        </form>

        <BtnTema
          margin="8px 0 0 0"
          width={'100%'}
          color={variaveis.vermelhoEscuro}
          bkColor={variaveis.branco}
          fontSize="14px"
          onClick={() => handleCartChange('DeliveryDetails')}
        >
          Voltar para a edição de endereço
        </BtnTema>
      </>
    </CartContainer>
  )
}
