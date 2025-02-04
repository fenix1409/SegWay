import { useQuery } from "@tanstack/react-query"
import { instance } from "../hook/useAxios"
import { useDispatch } from "react-redux"
import { saveOrderProducts } from "../store/basketSlice"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import '../i18n'

export interface AccessoryType {
    id: string
    name: string
    image: string
    price: string
    description: string
}
const Accessory = () => {
    const dispatch = useDispatch()
    const [save, setSave] = useState<string[]>([])
    const { t } = useTranslation()

    const { data: accessories = [] } = useQuery({
        queryKey: ['accessories'],
        queryFn: () => instance().get('/accessories').then((res) => res.data)
    })

    function handleSave(item: AccessoryType) {
        dispatch(saveOrderProducts(item))
        setSave([...save, item.id])
    }

    return (
        <ul className="flex items-end justify-center gap-[45px] flex-wrap text-center">
            {accessories.map((item: AccessoryType) => (
                <li key={item.id} className="w-[295px]">
                    <img src={item.image} alt="image" width={173} height={133} className="mb-5 mx-auto" />
                    <h2 className="text-[25px] leading-[23px] font-medium text-[#323941] mb-4">{item.name}</h2>
                    <p className="text-[13px] leading-[15px] text-[#999999] mb-4">{item.description}</p>
                    <p className="text-[18px] leading-[21px] mb-[14px]">{item.price}</p>
                    <button onClick={() => handleSave(item)} className="w-[129px] py-[13px] inline-block border-[1px] border-[#C6C6C6] text-[13px] leading-[15px] text-[#C6C6C6] hover:border-[#009EFF] hover:bg-[#009EFF] hover:text-white duration-200">{save.includes(item.id) ? `${t("SAVED")}` : `${t('ADD TO CART')}`}</button>
                </li>
            ))}
        </ul>
    )
}

export default Accessory
