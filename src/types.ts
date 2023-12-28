export type ProductProps = {
  _id: string
  name: string
  price: string
  image: string
  gender: number
  description: number
}

export interface Review {
  image: string
  name: string
  review: string
  content: string
}

export interface ItemProps {
  image: string
  title: string
}
