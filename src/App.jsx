import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('false');
    const [data, setData] = useState([]);
    const router = createBrowserRouter(ROUTES);
    return (
        <>
        <MainContext.Provider value={{data, setData, loading, setLoading, error, setError}}>
            <RouterProvider router={router }/>
        </MainContext.Provider>
        </>
    );
}

export default App;
