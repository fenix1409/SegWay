import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Basket, Instagram, Logo } from '../../assets/Icons'
import Profile from '../../assets/images/profile.svg'
import '../../i18n'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const navigate = useNavigate()
    const { t, i18n } = useTranslation()

    function changeLanguage(lang: string) {
        localStorage.setItem('lang', lang)
        i18n.changeLanguage(lang)
    }

    return (
        <div className="flex flex-col">
            <div className='flex items-center justify-between bg-[#323941] px-[210px] py-[11px]'>
                <ul className='flex items-center gap-[24px]'>
                    <li>
                        <NavLink className={'text-[18px] leading-[21px] text-white'} to={'/reviews'}>{t("REVIEWS")}</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-[18px] leading-[21px] text-white'} to={'/shipping-and-payment'}>{t("SHIPPING AND PAYMENT")}</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-[18px] leading-[21px] text-white'} to={'/wholesale'}>{t("WHOLESALE")}</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-[18px] leading-[21px] text-white'} to={'/blog'}>{t("BLOG")}</NavLink>
                    </li>
                    <li>
                        <NavLink className={'text-[18px] leading-[21px] text-white'} to={'/contacts'}>{t("CONTACTS")}</NavLink>
                    </li>
                </ul>
                <select onChange={(e) => changeLanguage(e.target.value)} className="bg-[#323941] text-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="en">English</option>
                    <option value="uz">Uzbek</option>
                </select>
                <div className="flex items-center gap-[24px]">
                    <NavLink to={'/basket'}><Basket /></NavLink>
                    <NavLink to={'#'}><Instagram /></NavLink>
                    <Link to={'tel:+18888888888'} className='text-[18px] leading-[21px] text-white'>+1 (888) 888-88-88</Link>
                </div>
            </div>
            <div className="flex items-center justify-between px-[210px] py-[11px]">
                <button onClick={() => navigate('/')}><Logo /></button>
                <div className="flex items-center gap-[13px]">
                    <img src={Profile} alt="Profile" width={63} height={63} />
                    <div className="w-[100px] flex flex-col">
                        <strong className='inline-block text-[13px] leading-[15px] text-[#323941] font-semibold'>JOHN SMITH</strong>
                        <Link className='text-[13px] leading-[15px] text-[#009EFF]' to={'#'}>{t("Ask a question to the director")}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;