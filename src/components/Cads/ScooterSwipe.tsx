import { useQuery } from '@tanstack/react-query';
import { instance } from '../../hook/useAxios';
import { ScooterType } from '../../service/Scooters';

const ScooterSwipe = () => {
    const { data: scooters = [] } = useQuery({
        queryKey: ['scooters'],
        queryFn: () => instance().get('/scooters').then((res) => res.data)
    })

    const limitedScooters = scooters.slice(0,4)
    console.log(limitedScooters);
    
    return (
        <ul className="flex items-center justify-between">
            {limitedScooters.map((item: ScooterType) => (
                <li key={item.id} className="w-[200px] flex items-center flex-col">
                    <img src={item.image} alt="scooter image" width={168} height={168} className="mb-[17px]" />
                    <h2 className="text-[18px] leading-[21px] font-bold text-[#323941] mb-[28px]">{item.name}</h2>
                    <div className="space-y-1">
                        <strong className="text-[20px] leading-[24px] text-[#009EFF] pb-2 border-b-[2px] border-[#ECECEC]">Max. speed</strong>
                        <p className="text-[18px] leading-[21px] text-[#323941]">{item.maxSpeed}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ScooterSwipe