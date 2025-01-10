import { useState } from "react";
import Scooters, { ScooterType } from "../service/Scooters";
import gift from '../assets/images/gift.png'
import Scooter from '../assets/images/heroimg.png'

const Home = () => {
  const [selectedScooter, setSelectedScooter] = useState<ScooterType | null>(null)

  console.log(selectedScooter);
  
  return (
    <div className="">
      <div className="px-[210px] bg-gray-600">
        <Scooters setSelectedScooter={setSelectedScooter} />
      </div>
      <div className="bg-[#009EFF] text-center py-[10px]">
        <p className="text-[18px] leading-[21px] text-white">Free 1 day shipping within California.</p>
      </div>
      {/* Selected scooter information part */}
      {selectedScooter && (
        <div className="px-[210px] flex items-center justify-between mt-[42px] mb-[60px]">
          <div className="w-[567px]">
            <h1 className="text-[80px] leading-[69px] font-bold text-[#323941] mb-[13px] uppercase">SEGWAY Ninebot Kickscooter MAX</h1>
            <div className="w-[542px] px-[20px] py-[22px] border-[1px] border-[#999999]">
              <strong className="text-[18px]leading-[21px] mb-[8px] inline-block">Add an extended warranty from <span className="text-[18px]leading-[21px] font-bold text-[#323941]">Extend</span></strong>
              <div className="flex items-center gap-[9px] mb-[19px]">
                <button className="text-[13px] leading-[15px] text-[#323941] w-[160px] text-center py-[10px] border-[1px] border-[#999999]">1 Year - $139</button>
                <button className="text-[13px] leading-[15px] text-[#323941] w-[160px] text-center py-[10px] border-[1px] border-[#999999]">2 Year - $209</button>
                <button className="text-[13px] leading-[15px] text-[#323941] w-[160px] text-center py-[10px] border-[1px] border-[#999999]">3 Year - $279</button>
              </div>
              <div className="flex items-center justify-between mb-[13px]">
                <div className="w-[136px] flex flex-col">
                  <strong className="text-[18px] leading-[21px] text-[#323941] line-through">{selectedScooter.cost}</strong>
                  <strong className="text-[35px] leading-[42px] font-bold text-[#323941]">{selectedScooter.discount}</strong>
                </div>
                <p className="text-[18px] leading-[21px] font-semibold text-[#009EFF] w-[150px]">Segway Protective Gear Set as a gift</p>
                <img src={gift} alt="gift img" width={120} height={87}/>
              </div>
              <div className="flex items-center justify-between">
                <button className="text-[18px] leading-[21px] font-bold text-white bg-[#009EFF] w-[239px] text-center py-[10px] uppercase">BUY IT Now</button>
                <button className="text-[18px] leading-[21px] font-bold text-white bg-[#009EFF] w-[239px] text-center py-[10px]">ADD TO CART</button>
              </div>
            </div>
          </div>
          <img src={Scooter} alt="scooter img" width={432} height={687}/>
        </div>
      )}
    </div>
  );
};

export default Home;
