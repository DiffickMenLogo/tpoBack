import { IProductInOrder } from 'src/types/IProductInOrder'
import { IUserAcc } from 'src/types/IUserAcc'
import { Telegram as ITelegram } from '../../types/ITelegram'
import { IWhatsup } from 'src/types/IWhatsup'
export class Order {
  date: number
  items: Array<IProductInOrder>
  order: string
  _id: string
  paidValue?: string
  tradeName?: string
  type: string
  userAcc?: IUserAcc
  tg?: ITelegram
  msg?: IWhatsup
  status: {
    color?: string
    desc?: string
    name?: string
    openColorPicker?: boolean
    type?: string
  }
}
