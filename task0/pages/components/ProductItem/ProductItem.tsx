import { Product } from '@/pages/models/Product'
import React from 'react'

interface ProductItemProps {
    product: Product
}

function ProductItem({ product: { name, price, description } }: ProductItemProps) {
    return (
        <div className='product-item-wrapper'>
            <div className='header'>
                <div className='name'> {name} </div>
                <div className='price'> {price}</div>
            </div>
            <p className='description'> {description} </p>
        </div>
    )
}

export default ProductItem