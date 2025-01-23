import { useQuery } from "@tanstack/react-query"
import { instance } from "../../hook/useAxios"
import { ScooterType } from "../../service/Scooters";
import { useTranslation } from "react-i18next";
import '../../i18n'

const Others = () => {
    const { t } = useTranslation()
    const { data: scooters = [] } = useQuery({
        queryKey: ['scooters'],
        queryFn: () => instance().get('/scooters').then(res => res.data)
    })
    console.log(scooters);

    return (
        <div className="px-[174px] bg-white mb-[60px]">
            <h1 className="text-[50px] leading-[60px] font-bold text-[#323941] mb-[21px] text-center">{t("OTHER MODELS")}</h1>
            <p className="text-[18px] leading-[21px] text-[#323941] text-center mb-[49px]">{t("Check out the entire line of Segway scooters")}</p>
            <ul className="flex items-baseline justify-center gap-[3px] flex-wrap">
                {scooters.map((item: ScooterType) => (
                    <li key={item.id} className="w-[237px] h-[281px] text-center">
                        <img src={item.image} alt="image" width={133} height={133} className="rounded-full bg-[#F5F5F5] mb-5 mx-auto" />
                        <h2 className="text-[25px] leading-[23px] font-bold text-[#323941] mb-[1px]">{item.name}</h2>
                        <p className="text-[18px] leading-[21px] text-[#323941] mb-[18px]">{item.cost}</p>
                        <button className="w-[129px] py-[13px] inline-block border-[1px] border-[#C6C6C6] text-[13px] leading-[15px] text-[#C6C6C6] hover:border-[#009EFF] hover:bg-[#009EFF] hover:text-white duration-200">{t("SEE MORE")}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Others