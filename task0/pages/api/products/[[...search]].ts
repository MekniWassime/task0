// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { fakeData } from '../fakeData'

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
  const query = req.query;
  const { search } = query;
  var searchQuery = (search !== undefined ? search[0] : "") as string;

  var items = fakeData.items;
  console.log(`search: ${searchQuery}`)
  if (searchQuery !== "")
    items = items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const productsList = items.map((product) => (product as Data))
  res.status(200).json({ items: productsList })
}
