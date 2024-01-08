import { memo } from 'react'
import { HeaderSection } from '..'
import cls from './pricing.module.scss'
import img from '../../assets/images/pricing-table-01.png'
const Pricing = () => {
  return (
    <section className={`${cls.pricing} pt_130`}>
        <div className="mcontainer">
            <HeaderSection 
                title={
                    <>
                        we have the best pre-order <span>prices</span> you can get
                    </>
                }
                description={
                    <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.
                    </>
                }
            />
            <div className={`${cls.pricing__items} row capitalize`}>
                <div className={`${cls.pricing__item} col-lg-4 col-md-12 col-12`}>
                    <div className={`${cls.pricing__item__content}`}>
                        <p className={`${cls.pricing__item__content_price}`}>$12</p>
                        <h3 className={`${cls.pricing__item__content_title}`}>standard plan app</h3>
                        <img src={img} className={`${cls.pricing__item__content_img}`} alt="img" />
                        <ul className={`${cls.pricing__item__content_proprties} capitalize`}>
                            <li className={cls.active}>lorem ipsum dolores</li>
                            <li className={cls.active}>20 <span className='uppercase'>tb</span> of storage</li>
                            <li>life-time support</li>
                            <li>premium add-ons</li>
                            <li>fastest network</li>
                            <li>more options</li>
                        </ul>
                        <div className={`${cls.pricing__item__content_borderBtn}`}>
                            <a href="#" className={`${cls.link}`}>purchase this plan now</a>
                        </div>
                    </div>
                </div>
                <div className={`${cls.pricing__item} col-lg-4 col-md-12 col-12`}>
                    <div className={`${cls.pricing__item__content} ${cls.business}`}>
                        <p className={`${cls.pricing__item__content_price}`}>$25</p>
                        <h3 className={`${cls.pricing__item__content_title}`}>business plan app</h3>
                        <img src={img} className={`${cls.pricing__item__content_img}`} alt="img" />
                        <ul className={`${cls.pricing__item__content_proprties} capitalize`}>
                            <li className={cls.active}>lorem ipsum dolores</li>
                            <li className={cls.active}>20 <span className='uppercase'>tb</span> of storage</li>
                            <li className={cls.active}>life-time support</li>
                            <li className={cls.active}>premium add-ons</li>
                            <li>fastest network</li>
                            <li>more options</li>
                        </ul>
                        <div className={`${cls.pricing__item__content_borderBtn}`}>
                            <a href="#" className={`${cls.link}`}>purchase this plan now</a>
                        </div>
                    </div>
                </div>
                <div className={`${cls.pricing__item} col-lg-4 col-md-12 col-12`}>
                    <div className={`${cls.pricing__item__content}`}>
                        <p className={`${cls.pricing__item__content_price}`}>$66</p>
                        <h3 className={`${cls.pricing__item__content_title}`}>premium plan app</h3>
                        <img src={img} className={`${cls.pricing__item__content_img}`} alt="img" />
                        <ul className={`${cls.pricing__item__content_proprties} capitalize`}>
                            <li className={cls.active}>lorem ipsum dolores</li>
                            <li className={cls.active}>20 <span className='uppercase'>tb</span> of storage</li>
                            <li className={cls.active}>life-time support</li>
                            <li className={cls.active}>premium add-ons</li>
                            <li className={cls.active}>fastest network</li>
                            <li className={cls.active}>more options</li>
                        </ul>
                        <div className={`${cls.pricing__item__content_borderBtn}`}>
                            <a href="#" className={`${cls.link}`}>purchase this plan now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default memo(Pricing);