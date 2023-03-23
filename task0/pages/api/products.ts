// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
<<<<<<< Updated upstream
import { fakeData } from './fakeData'

type Data = {
  id: number,
  name: string,
  price: number,
  description: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ items: Data[] }>
) {
  const productsList = fakeData.items.map((product) => (product as Data))
=======
import { Product } from '../models/Product'
import { fakeData } from './fakeData'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ items: Product[] }>
) {
  const productsList = fakeData.items.map((item, index) => {
    const product = (item as Product)
    product.id = index;
    return product;
  })
>>>>>>> Stashed changes
  res.status(200).json({ items: productsList })
}
