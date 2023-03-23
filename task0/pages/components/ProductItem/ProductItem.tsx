import { Product } from '@/pages/models/Product'
import React from 'react'

interface ProductItemProps {
    product: Product
}

function ProductItem({ product: { name, price, description } }: ProductItemProps) {
    return (
        <div>
            <div> {name} </div>
            <div> {price}</div>
            <p> {description} </p>
        </div>
    )
}

export default ProductItem