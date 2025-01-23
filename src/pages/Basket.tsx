import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { deleteOrderProducts, deleteOrderScooters, saveOrderProducts, saveOrderScooters } from "../store/basketSlice";
import { ScooterType } from "../service/Scooters";
import { AccessoryType } from "../service/Accessory";
import { useTranslation } from "react-i18next";
import '../i18n'

const Basket = () => {
  const dispatch = useDispatch()
  const savedProducts = useSelector((state: RootState) => state.order.accessoryList)
  const savedScooters = useSelector((state: RootState) => state.order.orderList)
  const { t } = useTranslation()
  // const { savedScooters: contextSavedScooters, savedAccessories: contextSavedAccessories } = useSaveContext();

  useEffect(() => {
    const savedProductsFromLocalStorage = JSON.parse(localStorage.getItem('savedProducts') || '[]')
    const savedScootersFromLocalStorage = JSON.parse(localStorage.getItem('savedScooters') || '[]')

    savedProductsFromLocalStorage.forEach((product: AccessoryType) => {
      dispatch(saveOrderProducts(product))
    })

    savedScootersFromLocalStorage.forEach((scooter: ScooterType) => {
      dispatch(saveOrderScooters(scooter))
    })
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('savedProducts', JSON.stringify(savedProducts))
    localStorage.setItem('savedScooters', JSON.stringify(savedScooters))
  }, [savedProducts, savedScooters])

  return (
    <div className="p-16">
      <div className="flex items-center gap-[300px] mb-[45px]">
        <h1 className="text-2xl">{t("Saved Products")}</h1>
      </div>
      <div className="space-y-5">
        <h2 className="text-[30px] leading-[60px] font-bold mb-5">{t("Accessories")}</h2>
        <ul className="flex items-end gap-[41px] flex-wrap mb-5">
          {savedProducts.map((item: AccessoryType) => (
            <li key={item.id} className="w-[295px] text-center">
              <img src={item.image} alt="image" width={173} height={133} className="mb-5 mx-auto" />
              <h2 className="text-[25px] leading-[23px] font-medium text-[#323941] mb-4">{item.name}</h2>
              <p className="text-[13px] leading-[15px] text-[#999999] mb-4">{item.description}</p>
              <p className="text-[18px] leading-[21px] mb-[14px]">{item.price}</p>
              <button onClick={() => dispatch(deleteOrderProducts(item.id))} className="w-[129px] py-[13px] inline-block border-[1px] border-[#C6C6C6] text-[13px] leading-[15px] text-[#C6C6C6] hover:border-redbg-red-500 hover:bg-red-500 hover:text-white duration-200">{t("REMOVE")}</button>
            </li>
          ))}
        </ul>
        <h2 className="text-[30px] leading-[60px] font-bold mb-5">{t("Scooters")}</h2>
        <ul className="flex items-center gap-[41px] flex-wrap">
          {savedScooters.map((item: ScooterType) => (
            <li key={item.id} className="w-[295px] text-center">
              <img src={item.image} alt="image" width={173} height={133} className="mb-5 mx-auto" />
              <h2 className="text-[25px] leading-[23px] font-medium text-[#323941] mb-4">{item.name}</h2>
              <p className="text-[13px] leading-[15px] text-[#999999] mb-4 line-through">{item.cost}</p>
              <p className="text-[18px] leading-[21px] mb-[14px]">{item.discount}</p>
              <button onClick={() => dispatch(deleteOrderScooters(item.id))} className="w-[129px] py-[13px] inline-block border-[1px] border-[#C6C6C6] text-[13px] leading-[15px] text-[#C6C6C6] hover:border-redbg-red-500 hover:bg-red-500 hover:text-white duration-200">{t("REMOVE")}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Basket;