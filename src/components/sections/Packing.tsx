import Video from "../../assets/images/gift.png";
import PackingImg from "../../assets/images/packinglist.png";

const Packing = () => {
  return (
    <div className="px-[210px] mt-[47px] mb-[63px] pb-[93px] packing flex items-center justify-between">
      <div className="w-[488px]">
        <h2 className="text-[50px] leading-[59px] font-medium mb-[28px] text-[#323941]">
          Packing List
        </h2>
        <video className="w-full h-[278px]" controls>
          <source src={Video} />
        </video>
      </div>
      <div className="">
        <div className="w-[400px] h-[400px] bg-[#009EFF] absolute rounded-full"></div>
        <img className="relative" src={PackingImg} alt="image" width={417} height={388} />
      </div>
    </div>
  );
};

export default Packing;
