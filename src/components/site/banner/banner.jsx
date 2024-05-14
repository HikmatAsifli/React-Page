import React from 'react'
import './banner.css'
import banner from '../../../assets/header-img.png'

const Banner = () => {
    return (
        <section className='banner'>
            <div className="container-fluid">
                <div className="row fullscreen align-items-center justify-content-center" style={{ height: "929px" }}>
                    <div className="col-lg-6 col-md-6 d-flex align-self-end img-right">
                        <img src={banner} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h1 className="text">
                            <span>Flat </span>
                            75%Off
                        </h1>
                        <h1 className="sub">
                            IT’S HAPPENING
                            <br />
                            THIS SEASON!
                        </h1>
                        <button className="btn btn-light primary-btn">Purchase Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner