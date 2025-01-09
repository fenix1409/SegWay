import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import Basket from '../pages/Basket'

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