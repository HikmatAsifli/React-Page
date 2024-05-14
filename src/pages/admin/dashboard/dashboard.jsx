
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'

const Dashboard = () => {
    const {data,setData} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>Dashboard page
            </div>
    </>
    )
}

export default Dashboard
    