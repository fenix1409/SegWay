import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useDispatch } from "react-redux"
import { deleteOrderProducts, deleteOrderScooters } from "../store/basketSlice"
import { ScooterType } from "../service/Scooters"
import { AccessoryType } from "../service/Accessory"

const Basket = () => {
  const savedScooters = useSelector((state: RootState) => state.order.orderList)
  const savedProducts = useSelector((state: RootState) => state.order.accessoryList)
  console.log(savedProducts);

  const dispatch = useDispatch()
  return (
    <div className="p-16">
      <div className="flex items-center gap-[300px] mb-[45px]">
        <h1 className="text-2xl">Saved Products</h1>
      </div>
      <div className="space-y-5">
        <ul className="flex items-center gap-[41px]">
          {savedProducts.map((item: AccessoryType) => (
            <li key={item.id} className="w-[295px] text-center">
              <img src={item.image} alt="image" width={173} height={133} className="mb-5 mx-auto" />
              <h2 className="text-[25px] leading-[23px] font-medium text-[#323941] mb-4">{item.name}</h2>
              <p className="text-[13px] leading-[15px] text-[#999999] mb-4">{item.description}</p>
              <p className="text-[18px] leading-[21px] mb-[14px]">{item.price}</p>
              <button onClick={() => dispatch(deleteOrderProducts(item.id))} className="w-[129px] py-[13px] inline-block border-[1px] border-[#C6C6C6] text-[13px] leading-[15px] text-[#C6C6C6] hover:border-[#009EFF] hover:bg-[#009EFF] hover:text-white duration-200">REMOVE</button>
            </li>
          ))}
        </ul>
        <ul className='flex items-center gap-[41px]'>
          {savedScooters.map((product: ScooterType) => (
            <li key={product.id} className="w-[168px] p-[10px] border-[1px] border-black">
              <img src={product.image} alt="image" width={168} height={181} />
              <h2 className="text-[18px] leading-[21px] font-bold mt-[17px] mb-[9px] text-[#323941]">{product.name}</h2>
              <div>
                <span className="text-[20px] leading-[24px] text-[#009EFF] mb-[10px]">Max speed</span>
                <p className="text-[12px] leading-[18px] font-medium pb-[49px] border-b-[1px]">{product.maxSpeed}</p>
              </div>
              <div>
                <span className="text-[20px] leading-[24px] text-[#009EFF] mb-[10px]">Max distance</span>
                <p className="text-[12px] leading-[18px] font-medium pb-[49px] border-b-[1px]">{product.maxDistance}</p>
              </div>
              <div>
                <span className="text-[20px] leading-[24px] text-[#009EFF] mb-[10px]">Battery</span>
                <p className="text-[12px] leading-[18px] font-medium pb-[49px] border-b-[1px]">{product.battery}</p>
              </div>
              <div>
                <span className="text-[20px] leading-[24px] text-[#009EFF] mb-[10px]">Charging time</span>
                <p className="text-[12px] leading-[18px] font-medium pb-[49px] border-b-[1px]">{product.chargingTime}</p>
              </div>
              <div>
                <span className="text-[20px] leading-[24px] text-[#009EFF] mb-[10px]">Weight</span>
                <p className="text-[12px] leading-[18px] font-medium pb-[49px] border-b-[1px]">{product.weight}</p>
              </div>
              <p className="text-[12px] leading-[18px] font-medium pb-[49px] border-b-[1px]">{product.cost}</p>
              <p className="text-[12px] leading-[18px] font-medium pb-[49px] border-b-[1px]">{product.discount}</p>
              <button onClick={() => dispatch(deleteOrderScooters(product.id))} className="text-[12px] leading-[18px] font-medium mt-[7px]">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Basket