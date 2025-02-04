import { useState } from "react";
import Scooters, { ScooterType } from "../service/Scooters";
import gift from '../assets/images/gift.png'
import { Charge, Delivery, Miles, Support, Warranty } from "../assets/Icons";
import Packing from "../components/sections/Packing";
import Accessories from "../components/sections/Accessories";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { saveOrderScooters } from "../store/basketSlice";
import Feature from "../components/sections/Feature";
import Smart from "../components/sections/Smart";
import Manual from "../components/sections/Manual";
import Compare from "../components/sections/Compare";
import Review from "../components/sections/Review";
import Control from "../components/sections/Control";
import Others from "../components/sections/Others";
import Footer from "../components/sections/Footer";
import { useTranslation } from "react-i18next";
import '../i18n'

const Home = () => {
  const [selectedScooter, setSelectedScooter] = useState<ScooterType | null>(null)
  const [saved, setSaved] = useState<string[]>([])
  const dispatch = useDispatch()
  const { t } = useTranslation()

  function handleSave(selectedScooter: ScooterType) {
    dispatch(saveOrderScooters(selectedScooter))
    setSaved([...saved, selectedScooter.id])
  }

  localStorage.setItem('products', JSON.stringify(selectedScooter))
  return (
    <div className="bg-white">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="px-[210px] bg-gray-600">
        <Scooters setSelectedScooter={setSelectedScooter} />
      </div>
      <div className="bg-[#009EFF] text-center py-[10px]">
        <p className="text-[18px] leading-[21px] text-white">{t("Free 1 day shipping within California.")}</p>
      </div>
      {/* Selected scooter information part */}
      {selectedScooter && (
        <div className="px-[210px] flex items-center justify-between mt-[42px] mb-[60px]">
          <div className="w-[567px]">
            <h1 className="text-[80px] leading-[69px] font-bold text-[#323941] mb-[13px] uppercase">SEGWAY Ninebot Kickscooter <span>{selectedScooter.name}</span></h1>
            <div className="w-[542px] px-[20px] py-[22px] border-[1px] border-[#999999]">
              <strong className="text-[18px]leading-[21px] mb-[8px] inline-block">{t("Add an extended warranty from")} <span className="text-[18px]leading-[21px] font-bold text-[#323941]">{t("Extend")}</span></strong>
              <div className="flex items-center gap-[9px] mb-[19px]">
                <button className="text-[13px] leading-[15px] text-[#323941] w-[160px] text-center py-[10px] border-[1px] border-[#999999]">1 {t("Year")} - $139</button>
                <button className="text-[13px] leading-[15px] text-[#323941] w-[160px] text-center py-[10px] border-[1px] border-[#999999]">2 {t("Year")} - $209</button>
                <button className="text-[13px] leading-[15px] text-[#323941] w-[160px] text-center py-[10px] border-[1px] border-[#999999]">3 {t("Year")} - $279</button>
              </div>
              <div className="flex items-center justify-between mb-[13px]">
                <div className="w-[136px] flex flex-col">
                  <strong className="text-[18px] leading-[21px] text-[#323941] line-through">{selectedScooter.cost}</strong>
                  <strong className="text-[35px] leading-[42px] font-bold text-[#323941]">{selectedScooter.discount}</strong>
                </div>
                <p className="text-[18px] leading-[21px] font-semibold text-[#009EFF] w-[150px]">{t("Segway Protective Gear Set as a gift")}</p>
                <img src={gift} alt="gift img" width={120} height={87} />
              </div>
              <div className="flex items-center justify-between">
                <button className="text-[18px] leading-[21px] font-bold text-white bg-[#009EFF] w-[239px] text-center py-[10px] uppercase">{t("BUY IT Now")}</button>
                <button onClick={() => handleSave(selectedScooter)} className="text-[18px] leading-[21px] font-bold text-white bg-[#009EFF] w-[239px] text-center py-[10px]">
                  {saved.includes(selectedScooter.id) ? `${t('SAVED')}` : `${t('ADD TO CART')}`}
                </button>
              </div>
            </div>
          </div>
          <img src={selectedScooter.image} alt="scooter img" width={432} height={687} />
        </div>
      )}
      {/* Selected scooter information part */}
      <div className="px-[210px] mt-[47px] mb-[75px]">
        <ul className="flex items-center justify-between">
          <li className="w-[178px] flex items-center gap-[20px]">
            <div className=""><Delivery /></div>
            <p className="text-[18px] leading-[21px] text-[#999999]">{t("Delivery within 1 business day")}</p>
          </li>
          <li className="w-[141px] flex items-center gap-[20px]">
            <div className=""><Warranty /></div>
            <p className="text-[18px] leading-[21px] text-[#999999]">{t("Basic 1 year warranty")}</p>
          </li>
          <li className="w-[178px] flex items-center gap-[20px]">
            <div className=""><Support /></div>
            <p className="text-[18px] leading-[21px] text-[#999999]">{t("After Sales Support")}</p>
          </li>
          <li className="w-[236px] flex items-center gap-[20px] bg-[#009EFF] py-[14px] px-[19px]">
            <div className=""><Charge /></div>
            <p className="text-[18px] leading-[21px] text-white">{t("Up to 40 miles per charge")}</p>
          </li>
        </ul>
        <div className="w-full bg-[#F5F5F5] pl-[22px] pr-[16px] flex items-center justify-between">
          <div className="w-[531px]">
            <h2 className="text-[25px] leading-[31px] font-bold text-[#323941] mb-[10px]">{t("Up to 40 miles of range on a single charge")}</h2>
            <p className="text-[18px] leading-[21px] text-[#323941]">{t("With a range of up to 40 miles, the longest range on the market, and a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from San Francisco Bay Area to Palo Alto on a single charge.")}</p>
          </div>
          <div className=""><Miles /></div>
        </div>
      </div>
      <section><Packing /></section>
      <section><Accessories /></section>
      <section><Feature /></section>
      <section><Smart /></section>
      <section><Manual /></section>
      <section><Compare /></section>
      <section><Review /></section>
      <section><Control /></section>
      <section><Others /></section>
      <section><Footer /></section>
    </div>
  );
};

export default Home;
