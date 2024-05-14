import React, { useContext, useEffect } from 'react'
import './Card.css'
import MainContext from '../../../context/context'

const Card = () => {
    const { data, basket,setBasket } = useContext(MainContext)
    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket])

    const addToBasket = (id) => {
        let product = data.find(item => item.id === id)
        if(!product) {
            product.count = 1
            product.totalPrice = product.price
            setBasket([...basket, product])
        }
        else{
            product.count += 1
            product.totalPrice = product.price * product.count
            setBasket([...basket, product])
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    data.map(item => (
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <img src={item.image} className="card-img-top" alt="..." width="300px" height="300px" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h4>${item.price}</h4>
                                    <button className='btn btn-success' onClick={() => {
                                        addToBasket(item.id)
                                    }}>Add To Basket</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card