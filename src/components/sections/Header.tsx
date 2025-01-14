import { Link, NavLink } from 'react-router-dom'
import { Basket, Instagram, Logo } from '../../assets/Icons'
import Profile from '../../assets/images/profile.svg'

const Header = () => {
    return (
        <div className="flex flex-col">
            <div className='flex items-center justify-between bg-[#323941] px-[210px] py-[11px]'>
                <ul className='flex items-center gap-[24px]'>
                    <li>
                        <NavLink className={'text-[18px] leading-[21px] text-white'} to={'/'}>REVIEWS</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-[18px] leading-[21px] text-white'} to={'/'}>SHIPPING AND PAYMENT</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-[18px] leading-[21px] text-white'} to={'/'}>WHOLESALE</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-[18px] leading-[21px] text-white'} to={'/'}>BLOG</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-[18px] leading-[21px] text-white'} to={'/'}>CONTACTS</NavLink>
                    </li>
                </ul>
                <div className="flex items-center gap-[24px]">
                    <NavLink to={'/basket'}><Basket /></NavLink>
                    <NavLink to={'#'}><Instagram /></NavLink>
                    <Link to={'tel:+18888888888'} className='text-[18px] leading-[21px] text-white'>+1 (888) 888-88-88</Link>
                </div>
            </div>
            <div className="flex items-center justify-between px-[210px] py-[11px]">
                <div><Logo/></div>
                <div className="flex items-center gap-[13px]">
                    <img src={Profile} alt="image" width={63} height={63}/>
                    <div className="w-[100px] flex flex-col">
                        <strong className='inline-block text-[13px] leading-[15px] text-[#323941] font-semibold'>JOHN SMITH</strong>
                        <Link className='text-[13px] leading-[15px] text-[#009EFF]' to={'#'}>Ask a question 
                        to the director</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header