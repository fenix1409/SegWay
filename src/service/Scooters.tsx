import { useQuery } from "@tanstack/react-query";
import { instance } from "../hook/useAxios";
import { useState } from "react";

export interface ScooterType {
    id: string
    name: string
    image: string
    cost: string
    discount: string
    maxSpeed: string
    maxDistance: string
    battery: string
    chargingTime: string
    weight: string
}

interface ScootersProps {
    setSelectedScooter: (scooter: ScooterType) => void
}

const Scooters: React.FC<ScootersProps> = ({ setSelectedScooter }) => {
    const [active, setActive] = useState<string | null>(null)

    const { data: scooters = [] } = useQuery({
        queryKey: ["scooters"],
        queryFn: () => instance().get("/scooters").then((res) => res.data)
    })
    
    function handleSelectScooter(scooter: ScooterType){
        setSelectedScooter(scooter)
        setActive(scooter.id)
    }

    return (
        <ul className="flex items-center flex-wrap">
            {scooters.map((item: ScooterType) => (
                <li key={item.id} className={`w-[137px] pt-[9px] px-[31px] pb-[14px] text-center cursor-pointer rounded ${active === item.id && "bg-blue-500 hover:bg-blue-800"} hover:bg-gray-700`}
                    onClick={() => handleSelectScooter(item)}>
                    <img src={item.image} alt={`${item.name} image`} width={80} height={80} className="mx-auto" />
                    <strong className="text-[18px] leading-[21px] font-bold text-white">{item.name}</strong>
                </li>
            ))}
        </ul>
    )
}

export default Scooters