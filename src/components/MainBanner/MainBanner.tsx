import { memo } from 'react';
import img from '../../assets/images/slider-dec.png';
import cls from './mainBanner.module.scss';
import { FaApple } from "react-icons/fa";
import { RiGooglePlayFill } from "react-icons/ri";

const MainBanner = () => {
  return (
    <section className={cls.mainBanner}>
        {/* <div className={cls.mainBanner__content}> */}
            <div className={`${cls.mainBanner__items} row`}>
                <div className={`${cls.mainBanner__left} col-lg-8 col-12`}>
                    <h1 className={`${cls.mainBanner__left_title} capitalize`}>get the latest app from app stores</h1>
                    <p className={`${cls.mainBanner__left_desc} capitalize`}>Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website to download free CSS templates.</p>
                    <div className={cls.mainBanner__left__btns}>
                        <button className={`${cls.btn} capitalize`}>
                            free quote <FaApple className={cls.icon} />
                        </button>
                        <button className={`${cls.btn} capitalize`}>free quote <RiGooglePlayFill className={cls.icon} /></button>
                    </div>
                </div>
                <div className={`${cls.mainBanner__right} col-lg-4 col-12`}>
                    <img src={img} alt="image" />
                </div>
            </div>
        {/* </div> */}
    </section>
  )
}

export default memo(MainBanner);