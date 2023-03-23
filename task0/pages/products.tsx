import React, { useEffect, useState } from 'react'
import ProductItem from './components/ProductItem'
import { Product } from './models/Product'

function products() {
    const [data, setData] = useState<Product[]>([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/products')
            .then((res) => res.json())
            .then((data: { items: Product[] }) => {
                setData(data.items)
                setLoading(false)
            })
    }, [])

    const renderProductsList = () => {
        if (isLoading)
            return <div>Loading</div>
        else
            return data.map((product) => (<ProductItem product={product} key={product.id} />))
    }

    console.log(data)
    console.log(isLoading)
    return (
        <div>
            {renderProductsList()}
        </div>
    )
}

export default products