import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/shop/img/l5.jpg.webp" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h4>Price</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card