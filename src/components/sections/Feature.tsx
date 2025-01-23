import { useTranslation } from 'react-i18next'
import { Battery, Charging, Hill, Led, Speed, Tires, Water } from '../../assets/Icons'
import Image from '../../assets/images/featureimg.png'
import Overview from '../../assets/images/overview.svg'
import '../../i18n'

const Feature = () => {
    const { t } = useTranslation()
    return (
        <div>
            <div className='bg-[#F5F5F5] pb-[73px]'>
                <img src={Image} alt="image" className='!w-full mb-[63px]' height={724} />
                <div className="pl-[281px] pr-[258px]">
                    <h1 className='text-[50px] leading-[59px] font-semibold text-[#323941] mb-[81px] text-center'>{t("IMPRESSIVE FEATURES")}</h1>
                    <ul className='flex items-center gap-[100px] justify-center flex-wrap'>
                        <li className='w-[127px] text-center inline-block'>
                            <div className="mb-[1px] inline-block mx-auto"><Tires /></div>
                            <strong className='text-[35px] leading-[42px] font-light text-[#009EFF]'>10”</strong>
                            <p className='text-[18px] leading-[21px] text-[#999999]'>{t("Pneumatic Tires")}</p>
                        </li>
                        <li className='w-[130px] text-center inline-block'>
                            <div className="mb-[1px] inline-block mx-auto"><Led /></div>
                            <strong className='text-[35px] leading-[42px] font-light text-[#009EFF]'>LED</strong>
                            <p className='text-[18px] leading-[21px] text-[#999999]'>{t("Front LED Lights")}</p>
                        </li>
                        <li className='w-[134px] text-center inline-block'>
                            <div className="mb-[1px] inline-block mx-auto"><Speed /></div>
                            <strong className='text-[35px] leading-[42px] font-light text-[#009EFF]'>18.6 mph</strong>
                            <p className='text-[18px] leading-[21px] text-[#999999]'>{t("Max Speed")}</p>
                        </li>
                        <li className='w-[154px] text-center inline-block'>
                            <div className="mb-[1px] inline-block mx-auto"><Tires /></div>
                            <strong className='text-[35px] leading-[42px] font-light text-[#009EFF]'>40.4 Miles</strong>
                            <p className='text-[18px] leading-[21px] text-[#999999]'>{t("Max Range")}</p>
                        </li>
                        <li className='w-[100px] text-center inline-block'>
                            <div className="mb-[1px] inline-block mx-auto"><Hill /></div>
                            <strong className='text-[35px] leading-[42px] font-light text-[#009EFF]'>20%</strong>
                            <p className='text-[18px] leading-[21px] text-[#999999]'>{t("Hill Grade")}</p>
                        </li>
                        <li className='w-[123px] text-center inline-block'>
                            <div className="mb-[1px] inline-block mx-auto"><Water /></div>
                            <strong className='text-[35px] leading-[42px] font-light text-[#009EFF]'>IPX5</strong>
                            <p className='text-[18px] leading-[21px] text-[#999999]'>{t("Water-Resistant")}</p>
                        </li>
                        <li className='w-[110px] text-center inline-block'>
                            <div className="mb-[1px] inline-block mx-auto"><Charging /></div>
                            <strong className='text-[35px] leading-[42px] font-light text-[#009EFF]'>6H</strong>
                            <p className='text-[18px] leading-[21px] text-[#999999]'>{t("Fast Charging")}</p>
                        </li>
                        <li className='w-[104px] text-center inline-block'>
                            <div className="mb-[1px] inline-block mx-auto"><Battery /></div>
                            <strong className='text-[35px] leading-[42px] font-light text-[#009EFF]'>551Wh</strong>
                            <p className='text-[18px] leading-[21px] text-[#999999]'>{t("Battery")}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pl-[211px] pr-[207px]">
                <h2 className='text-[50px] leading-[59px] font-semibold text-[#323941] text-center mt-[43px]'>{t("KickScooter overview SEGWAY Ninebot Kickscooter MAX")}</h2>
                <img src={Overview} alt="overview image" height={561} className='!w-full' />
            </div>
        </div>
    )
}

export default Feature