
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Add = () => {
    const { data, setData } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container">
            <Formik
                initialValues={{ name: '', price: '', image: '',description: '' }}
                validate={values => {
                }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post('http://localhost:3000/products',{
                        id: uuidv4(),
                        name: values.name,
                        price: values.price,
                        image: values.image,
                        description: values.description
                    })
                    
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder='name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <input
                            type="text"
                            name="price"
                            placeholder='price'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {errors.price && touched.price && errors.price}
                        <input
                            type="text"
                            name="image"
                            placeholder='image'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image}
                        />
                        {errors.image && touched.image && errors.image}
                        <input
                            type="text"
                            name="description"
                            placeholder='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        {errors.desription && touched.description && errors.description}
                        <button className='btn btn-light' type="submit" >
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
            </div>
        </>
    )
}

export default Add
