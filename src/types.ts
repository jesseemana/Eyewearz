export type ProductProps = {
  id: number
  name: string
  price: string
  image: string
  reviews: number
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
