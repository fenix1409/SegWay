import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Basket from '../pages/Basket'
import Header from '../components/sections/Header'
import Admin from '../Admin/Admin'

const CustomRoutes = () => {
    return (
        <div>
            <Header />
            <div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                    <Route path='/admin' element={<Admin/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default CustomRoutes