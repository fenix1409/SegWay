import Image from '../../assets/images/Батареи.png'
import Breaking from '../../assets/images/breaking.png'
import Led from '../../assets/images/led.png'
import Brake from '../../assets/images/brake.png'
import Charge from '../../assets/images/charge.png'
import Modes from '../../assets/images/mode.png'
import Mech from '../../assets/images/mechanism.png'
import { useTranslation } from 'react-i18next'
import '../../i18n'

const Smart = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="flex items-center justify-between pl-[207px] bg-[#0E0E16]">
                <div className="w-[563px]">
                    <h1 className="text-[50px] leading-[59px] font-semibold text-white mb-[18px]">{t("Smart battery Management system (Smart-BMS)")}</h1>
                    <p className="text-[18px] leading-[21px] text-white">{t("The Smart-BMS closely monitors the battery status with multiple protection mechanisms to ensure the battery durability")}</p>
                </div>
                <img src={Image} alt="image" width={720} height={547} />
            </div>
            <div className="flex items-center justify-between pr-[207px] flex-row-reverse">
                <div className="w-[563px]">
                    <h1 className="text-[50px] leading-[59px] font-semibold text-[#323941] mb-[18px]">{t("Dual Breaking System")}</h1>
                    <p className="text-[18px] leading-[21px] text-[#323941] mb-[18px]">{t("Simultaneous mechanical front drum brake and regenerative electric back brake provide both stability and steerability.")}</p>
                    <strong className='text-[18px] leading-[21px] text-[#323941]'>{t("*IPX5 water resistance")}</strong>
                </div>
                <img src={Breaking} alt="image" width={720} height={547} />
            </div>
            <div className="flex items-center justify-between pl-[207px] bg-[#0E0E16]">
                <div className="w-[563px]">
                    <h1 className="text-[50px] leading-[59px] font-semibold text-white mb-[18px]">{t("Built-In Front LED Light")}</h1>
                    <p className="text-[18px] leading-[21px] text-white mb-[18px]">{t("Front-facing lights are designed with 2.5w high-brightness LED light to illuminate the path ahead of you and increase your visibility to others around you.")}</p>
                    <strong className='text-[18px] leading-[21px] text-[#323941]'>{t("*Disclaimer: for your safety, please try not to ride at night")}</strong>
                </div>
                <img src={Led} alt="image" width={720} height={547} />
            </div>
            <div className="px-[267px] text-center py-[75px]">
                <h1 className='text-[50px] leading-[59px] font-semibold mb-[18px]'>{t("One-step Folding Mechanism")}</h1>
                <p className='text-[18px] leading-[21px] mb-[30px]'>{t("Ninebot KickScooter MAX can be easily folded and carried around in 3 seconds.")}</p>
                <img className='mx-auto' src={Mech} alt="image" width={840} height={388} />
            </div>
            <div className="flex items-center justify-between pl-[207px] bg-[#0E0E16]">
                <div className="w-[563px]">
                    <h1 className="text-[50px] leading-[59px] font-semibold text-white mb-[18px]">{t("Regenerative Brake for Power Recycle")}</h1>
                    <p className="text-[18px] leading-[21px] text-white">{t("The innovative regenerative brake system turns Ninebot KickScooter MAX into an electric vehicle powered by electricity and recycled energy from riding. Energy will be collected from regenerative braking and distributed when you need a boost.")}</p>
                </div>
                <img src={Brake} alt="image" width={720} height={547} />
            </div>
            <div className="flex items-center justify-between pr-[207px] flex-row-reverse">
                <div className="w-[563px]">
                    <h1 className="text-[50px] leading-[59px] font-semibold text-[#323941] mb-[18px]">{t("Easy One Cord Fast Charging")}</h1>
                    <p className="text-[18px] leading-[21px] text-[#323941] mb-[18px]">{t("The built-in charger lets riders recharge it easily when on the go without having to carry along a bulky charging adapter. 3A fast charge will give Ninebot KickScooter MAX a full charge in 6 hours.")}</p>
                </div>
                <img src={Charge} alt="image" width={720} height={547} />
            </div>
            <div className="flex items-center justify-between pl-[207px] bg-[#0E0E16]">
                <div className="w-[563px]">
                    <h1 className="text-[50px] leading-[59px] font-semibold text-white mb-[18px]">{t("3 Riding Modes")}</h1>
                    <p className="text-[18px] leading-[21px] text-white">{t("Eco, Standard, and Sports modes can be directly accessed by the intuitive LED dashboard, which also displays maintenance signals, power levels, Bluetooth connectivity and more.")}</p>
                </div>
                <img src={Modes} alt="image" width={720} height={547} />
            </div>
        </>
    )
}

export default Smart