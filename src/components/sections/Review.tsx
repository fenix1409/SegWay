import { useTranslation } from 'react-i18next'
import Reviews from '../../assets/images/reviews.png'
import '../../i18n'

const Review = () => {
    const { t } = useTranslation()
    return (
        <div className="pt-[61px] pb-[101px] bg-[#F5F5F5]">
            <h1 className="text-[50px] leading-[59px] text-[#323941] font-bold mb-[38px] text-center uppercase">{t("REviews")}</h1>
            <img src={Reviews} alt="review image" width={859} height={487} className="mx-auto" />
        </div>
    )
}

export default Review