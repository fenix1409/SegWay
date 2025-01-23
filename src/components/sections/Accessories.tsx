import { useTranslation } from "react-i18next"
import Accessory from "../../service/Accessory"
import '../../i18n'

const Accessories = () => {
  const { t } = useTranslation()
  return (
    <div className="px-[210px] mb-[80px]">
      <h1 className="text-[50px] leading-[59px] font-semibold text-[#323941] mb-[31px] text-center">{t("Accessories")}</h1>
      <div><Accessory /></div>
    </div>
  )
}

export default Accessories