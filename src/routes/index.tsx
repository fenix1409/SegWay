import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Basket from '../pages/Basket'
import Header from '../components/sections/Header'

const CustomRoutes = () => {
    return (
        <div>
            <Header />
            <div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default CustomRoutes