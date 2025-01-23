import Carusel from "../Carousel/ScooterCarusel"
import Image from '../../assets/images/gear.png'
import { useTranslation } from "react-i18next"
import '../../i18n'

const Compare = () => {
  const {t} = useTranslation()
    
  return (
    <div className="px-[205px] py-[94px] bg-white">
        <div className="mb-[50px] text-center">
            <h1 className="text-[50px] leading-[60px] font-bold text-[#323941] mb-[18px] uppercase">{t("compare specifications")}</h1>
            <p className="text-[18px] leading-[21px] text-[#323941]">{t("Add model to compare")}</p>
        </div>
        <div className="mb-[121px]"><Carusel/></div>
        <div className="w-[963px] pt-[30px] pl-[50px] pb-[15px] border-[5px] mx-auto border-[#009EFF] flex items-center gap-[41px]">
          <img src={Image} alt="image" width={278} height={201}/>
          <div className="w-[527px]">
            <h2 className="text-[50px] leading-[59px] font-bold text-[#323941] mb-[9px]">{t("Segway Protective Gear Set as a gift")}</h2>
            <p className="text-[18px] leading-[21px] text-[#323941]">{t("The cost of a protection kit when buying a scooter is $ 0 instead of $ $29.99")}</p>
          </div>
        </div>
    </div>
  )
}

export default Compare