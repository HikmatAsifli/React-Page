import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from "axios";

function App() {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('false');
    const [data, setData] = useState([]);
    const router = createBrowserRouter(ROUTES);
    useEffect(()=>{
        axios.get('http://localhost:3000/products').then(res=>{
            setData([...res.data])
        }).catch(error =>{
            setError(error)
        })
    }, [])
    const contextData = {
        data, setData, loading, setLoading, error, setError
      }
    return (
        <>
        <MainContext.Provider value={contextData}>
            <RouterProvider router={router }/>
        </MainContext.Provider>
        </>
    );
}

export default App;
