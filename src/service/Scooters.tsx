import { useQuery } from "@tanstack/react-query";
import { instance } from "../hook/useAxios";

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
    const { data: scooters = [] } = useQuery({
        queryKey: ["scooters"],
        queryFn: () => instance().get("/scooters").then((res) => res.data)
    })

    return (
        <ul className="flex items-center space-x-4">
            {scooters.map((item: ScooterType) => (
                <li key={item.id} className="w-[137px] pt-[9px] px-[31px] pb-[14px] text-center cursor-pointer rounded hover:bg-gray-700"
                    onClick={() => setSelectedScooter(item)}>
                    <img src={item.image} alt={`${item.name} image`} width={80} height={80} className="mx-auto" />
                    <strong className="text-[18px] leading-[21px] font-bold text-white">{item.name}</strong>
                </li>
            ))}
        </ul>
    )
}

export default Scooters