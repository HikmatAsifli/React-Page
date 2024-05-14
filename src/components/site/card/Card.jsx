import React, { useContext } from 'react'
import './Card.css'
import MainContext from '../../../context/context'

const Card = () => {
    const {data} = useContext(MainContext)
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
                                    <h4>{item.price}</h4>
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