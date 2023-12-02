export interface IUserAcc {
  billAddress: BillAddress
  cif: any[]
  code: string
  dificuldade: boolean
  email: string
  employee: string
  enabled: boolean
  extraPedidos: boolean
  group: string
  iban: any[]
  img: string
  lastVisit: number
  name: string
  nif: any[]
  password: string
  phone: string
  phoneNumberPhoneCountry: string
  platform: string
  rate: number
  responsible: string
  solvencia: boolean
  swift: any[]
  tags: any[]
  time: number
  tipo: string
  tradeName: string
  type: string
  username: string
}

export interface BillAddress {
  address: string
  city: string
  postalCode: string
}
