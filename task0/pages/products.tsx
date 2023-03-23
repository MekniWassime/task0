import React, { useEffect, useState } from 'react'
import ProductItem from './components/ProductItem'
import { Product } from './models/Product'

function products() {
    const [data, setData] = useState<Product[]>([])
    const [isLoading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        setLoading(true)
        fetch(`/api/products/${search}`)
            .then((res) => res.json())
            .then((data: { items: Product[] }) => {
                setData(data.items)
                setLoading(false)
            })
    }, [search])

    const renderProductsList = () => {
        if (isLoading)
            return <div>Loading</div>
        else
            return data.map((product) => (<ProductItem product={product} key={product.id} />))
    }

    console.log(data)
    console.log(isLoading)
    return (<>
        <input name='search' id='search' type="text" value={search} onChange={(e) => {
            setSearch(e.target.value)
        }} />
        <div>
            {renderProductsList()}
        </div>
    </>
    )
}

export default products