import { useQuery } from '@tanstack/react-query';
import { instance } from '../../hook/useAxios';
import { ScooterType } from '../../service/Scooters';

const ScooterSwipe = () => {
    const { data: scooters = [] } = useQuery({
        queryKey: ['scooters'],
        queryFn: () => instance().get('/scooters').then((res) => res.data)
    })

    const limitedScooters = scooters.slice(0,4)
    
    return (
        <ul className="flex items-end justify-between">
            {limitedScooters.map((item: ScooterType) => (
                <li key={item.id} className="w-[220px]">
                    <img src={item.image} alt="scooter image" width={168} height={168} className="mb-[17px] relative right-[50px]" />
                    <h2 className="text-[18px] leading-[21px] text-start font-bold text-[#323941] mb-[28px]">{item.name}</h2>
                    <div className="space-y-1 text-start">
                        <strong className="text-[20px] inline-block text-start leading-[24px] text-[#009EFF] pb-2 border-b-[2px] border-[#ECECEC]">Max. speed</strong>
                        <p className="text-[18px] leading-[21px] text-[#323941] text-start">{item.maxSpeed}</p>
                    </div>
                    <div className="space-y-1 text-start">
                        <strong className="text-[20px] inline-block text-start leading-[24px] text-[#009EFF] pb-2 border-b-[2px] border-[#ECECEC]">Range (miles)</strong>
                        <p className="text-[18px] leading-[21px] text-[#323941] text-start">{item.maxDistance}</p>
                    </div>
                    <div className="space-y-1 text-start">
                        <strong className="text-[20px] inline-block text-start leading-[24px] text-[#009EFF] pb-2 border-b-[2px] border-[#ECECEC]">Battery Capacity</strong>
                        <p className="text-[18px] leading-[21px] text-[#323941] text-start">{item.battery}</p>
                    </div>
                    <div className="space-y-1 text-start">
                        <strong className="text-[20px] inline-block text-start leading-[24px] text-[#009EFF] pb-2 border-b-[2px] border-[#ECECEC]">Net Weight</strong>
                        <p className="text-[18px] leading-[21px] text-[#323941] text-start">{item.weight}</p>
                    </div>
                    <div className="space-y-1 text-start">
                        <strong className="text-[20px] inline-block text-start leading-[24px] text-[#009EFF] pb-2 border-b-[2px] border-[#ECECEC]">Chargin Time</strong>
                        <p className="text-[18px] leading-[21px] text-[#323941] text-start">{item.chargingTime}</p>
                    </div>
                    <div className='mt-[61px] mr-[33px]'>
                        <p className='text-[25px] leading-[23px] font-bold text-[#323941] mb-[15px] text-center'>{item.cost}</p>
                        <button className='w-[187px] inline-block p-[12px] bg-[#009EFF] text-[18px] leading-[21px] font-bold text-white'>BUY IT NOW</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ScooterSwipe