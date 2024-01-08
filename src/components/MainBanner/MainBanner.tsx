import { memo } from 'react';
import img from '../../assets/images/slider-dec.png';
import cls from './mainBanner.module.scss';
import { FaApple } from "react-icons/fa";
import { RiGooglePlayFill } from "react-icons/ri";

const MainBanner = () => {
  return (
    <section className={cls.mainBanner}>
        {/* <div className={cls.mainBanner__content}> */}
            <div className="row pt_130">
                <div className="col-lg-12 ">
                    <div className={`${cls.mainBanner__items} row`}>
                        <div className={`${cls.mainBanner__left} col-lg-6 col-md-12 col-12`}>
                            <h1 className={`${cls.mainBanner__left_title} capitalize`}>get the latest app from app stores</h1>
                            <p className={`${cls.mainBanner__left_desc} capitalize`}>Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website to download free CSS templates.</p>
                            <div className={cls.mainBanner__left__btns}>
                                <button className={`${cls.btn} capitalize`}>
                                    free quote <FaApple className={cls.icon} />
                                </button>
                                <button className={`${cls.btn} capitalize`}>free quote <RiGooglePlayFill className={cls.icon} /></button>
                            </div>
                        </div>
                        <div className={`${cls.mainBanner__right} col-lg-6 col-md-12 col-12`}>
                            <div className={`${cls.mainBanner__right_boxImg}`}>
                                <img src={img} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </section>
  )
}

export default memo(MainBanner);