import { Assembly, ChargeScooter, PDF, Ride } from '../../assets/Icons'
import Image from '../../assets/images/manual.png'
const Manual = () => {
  return (
    <div className="py-[90px] px-[278px] bg-[#F5F5F5]">
        <div className="w-[960px] h-[317px] border-[5px] border-[#009EFF] flex items-center">
            <img src={Image} className='relative right-[259px]' alt="image" width={601} height={424}/>
            <div className="text-start py-[37px] relative right-[190px]">
                <h1 className='text-[50px] leading-[59px] font-semibold text-[#323941] mb-[17px] w-[300px]'>DOWNLOAD MANUAL</h1>
                <ul className='flex items-center gap-[12px] mb-[26px]'>
                    <li className='w-[218px] flex items-center gap-[12px]'>
                        <div><Assembly/></div>
                        <strong className='text-[16px] leading-[19px] text-[#323941]'>Assembly and preparation for the trip</strong>
                    </li>
                    <li className='w-[153px] flex items-center gap-[12px]'>
                        <div><ChargeScooter/></div>
                        <strong className='text-[16px] leading-[19px] text-[#323941]'>How to charge a scooter</strong>
                    </li>
                    <li className='w-[133px] flex items-center gap-[12px]'>
                        <div><Ride/></div>
                        <strong className='text-[16px] leading-[19px] text-[#323941]'>How to ride properly</strong>
                    </li>
                </ul>
                <button className='w-[258px] pl-[15px] py-[10px] bg-[#009EFF] text-white text-[16px] leading-[19px] flex items-center gap-[37px]'>Download manual
                    <PDF/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Manual