import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Basket, Instagram, Logo } from '../../assets/Icons'
import Profile from '../../assets/images/profile.svg'
import '../../i18n'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'
import USA from '../../assets/images/usa-svgrepo-com.svg'
import UZ from '../../assets/images/uzbekistan-svgrepo-com.svg'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Header = () => {
    const navigate = useNavigate()
    const { t, i18n } = useTranslation()

    const options = [
        { value: 'en', label: <div className="flex items-center"><img src={USA} alt="USA" className="w-5 h-5 mr-2" />English</div> },
        { value: 'uz', label: <div className="flex items-center"><img src={UZ} alt="Uzbekistan" className="w-5 h-5 mr-2" />O'zbek</div> }
    ]

    function changeLanguage(option: any) {
        const lang = option.value
        localStorage.setItem('lang', lang)
        i18n.changeLanguage(lang)
    }

    // select part 
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            backgroundColor: '#323941',
            borderColor: '#C6C6C6',
            color: 'white',
            minHeight: '40px',
            height: '40px',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#009EFF'
            }
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: 'white'
        }),
        menu: (provided: any) => ({
            ...provided,
            backgroundColor: '#323941',
            color: 'white'
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#009EFF' : '#323941',
            color: state.isSelected ? 'white' : 'white',
            '&:hover': {
                backgroundColor: '#009EFF',
                color: 'white'
            }
        })
    }
    // select part 

    if(location.pathname === '/admin'){
        return null
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
                <Select
                    options={options}
                    onChange={changeLanguage}
                    defaultValue={options.find(option => option.value === i18n.language)}
                    styles={customStyles}
                    className="w-40"
                />
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
                    <Link to={'/admin'}>
                        <AdminPanelSettingsIcon style={{ color: '#009EFF', fontSize: 50 }} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header