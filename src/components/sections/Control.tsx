import { Alarm, Apple, Dashboard, PlaySotore, Settings, Status, Training, Upgrade } from "../../assets/Icons"
import Image from '../../assets/images/app 1.png'

const Control = () => {
    return (
        <div className='pt-[63px] bg-[#F5F5F5C9] mb-[64px]'>
            <div className="px-[176px] text-center mx-auto w-[77%]">
                <h1 className='text-[50px] leading-[59px] font-bold text-[#323941] mb-[16px]'>Control from your smartphone</h1>
                <p className='text-[18px] leading-[21px] text-[#323941]'>You can easily control your Segway electric scooter with your smartphone via Bluetooth. Not being the key to the kickscooter, it will give a signal in case of an attempt to steal. Check the current speed, data on the status of the device's systems or set the speed limit with a few touches. And the skating training program is indispensable for beginners.</p>
            </div>
            <div className="flex items-center justify-between pl-[347px] pr-[28px]">
                <div>
                    <ul className="flex items-center gap-[20px] flex-wrap w-[364px] mb-[26px]">
                        <li><Alarm /></li>
                        <li><Dashboard /></li>
                        <li><Upgrade /></li>
                        <li><Status /></li>
                        <li><Settings /></li>
                        <li><Training /></li>
                    </ul>
                    <div className="flex items-center gap-[11px]">
                        <button className="flex items-center gap-[9px] w-[141px] pt-[6px] pb-[4px] px-[12px] bg-[#000000] rounded-md">
                            <div><Apple /></div>
                            <div className="flex flex-col">
                                <span className="text-[13px] leading-[15px] text-white mb-[2.5px]">Download on</span>
                                <strong className="text-[18px] leading-[20px] font-bold text-white">App Store</strong>
                            </div>
                        </button>
                        <button className="flex items-center gap-[9px] w-[159px] pt-[6px] pb-[4px] px-[12px] bg-[#000000] rounded-md">
                            <div><PlaySotore /></div>
                            <div className="flex flex-col">
                                <span className="text-[13px] leading-[15px] text-white mb-[2.5px]">Download on</span>
                                <strong className="text-[18px] leading-[20px] font-bold text-white">Play Market</strong>
                            </div>
                        </button>
                    </div>
                </div>
                <img src={Image} alt="image" width={634} height={506} />
            </div>
        </div>
    )
}

export default Control