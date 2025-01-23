import { Link } from "react-router-dom"
import { Logo1 } from "../../assets/Icons"
import { useTranslation } from "react-i18next"
import '../../i18n'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="pl-[230px] pr-[212px] bg-[#32393F] flex items-center justify-between py-[20px]">
      <div><Logo1 /></div>
      <ul className="flex items-center gap-[44px]">
        <Link to={'tel:+1(888)7777777'} className="text-[13px] leading-[15px] text-white">+1 (888) 777-77-77</Link>
        <p className="text-[13px] leading-[15px] text-white">{t("2637 Fairfax Ave Culver City, CA 90232")}</p>
        <p className="text-[13px] leading-[15px] text-white">Segway  California © 2017</p>
      </ul>
    </div>
  )
}

export default Footer