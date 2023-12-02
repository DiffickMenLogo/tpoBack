export class Contact {
  _id: string
  type: string
  tradeName: string
  tags: Array<string>
  swift: Array<string>
  iban: Array<string>
  nif: Array<string>
  cif: Array<string>
  solvencia: boolean
  rate: number
  platform: string
  phone: string
  name: string
  lastVisit: string
  img: string
  extraPedidos: boolean
  enabled: boolean
  email: string
  dificilidad: boolean
  code: string
  billAddress: {
    address: string
    city: string
    postalCode: string
  }
}
