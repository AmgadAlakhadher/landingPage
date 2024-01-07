import { memo } from 'react'
import cls from './about.module.scss'
import { HeaderSection } from '..';
import img from '../../assets/images/about-right-dec.png';
const About = () => {
  return (
    <section className={`${cls.about} pt_130`}>
        <div className="mcontainer">
            <div className={`${cls.about__items} row`}>
                <div className={`${cls.about__left} col-lg-6 col-md-12 col-12`}>
                    <HeaderSection 
                        style={{textAlign: 'left', width: '100%'}}
                        title={
                            <>
                                about <span>what we do</span> & who we are
                            </>
                        }
                        description={
                            <>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.
                            </>
                        }
                    />

                    <div className={`${cls.about__left__items} row`}>
                        <div className={`${cls.about__left__item} col-lg-6 col-md-12 col-12 capitalize`}>
                           <div className={cls.about__left__item__content}>
                                <a href='#' className={`${cls.about__left__item__content_title}`}>maintance problems</a>
                                <p className={`${cls.about__left__item__content_desc}`}>lorem ipsum text</p>
                           </div>
                        </div>
                        <div className={`${cls.about__left__item} col-lg-6 col-md-12 col-12 capitalize`}>
                           <div className={cls.about__left__item__content}>
                                <a href='#' className={`${cls.about__left__item__content_title}`}>maintance problems</a>
                                <p className={`${cls.about__left__item__content_desc}`}>lorem ipsum text</p>
                           </div>
                        </div>
                        <div className={`${cls.about__left__item} col-lg-6 col-md-12 col-12 capitalize`}>
                           <div className={cls.about__left__item__content}>
                                <a href='#' className={`${cls.about__left__item__content_title}`}>maintance problems</a>
                                <p className={`${cls.about__left__item__content_desc}`}>lorem ipsum text</p>
                           </div>
                        </div>
                        <div className={`${cls.about__left__item} col-lg-6 col-md-12 col-12 capitalize`}>
                           <div className={cls.about__left__item__content}>
                                <a href='#' className={`${cls.about__left__item__content_title}`}>maintance problems</a>
                                <p className={`${cls.about__left__item__content_desc}`}>lorem ipsum text</p>
                           </div>
                        </div>
                    </div>
                    <p className="section__header_desc" style={{margin:0, width: '100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing magna.</p>
                    <button className={`${cls.about__left__items_btn} capitalize`}>start 14-day free trial</button>
                    <p className={`${cls.about__left__items_note} capitalize`}>*no credit card required</p>
                </div>
                <div className={`${cls.about__items__right} col-lg-6 col-md-12 col-12`}>
                    <img src={img} alt="image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default memo(About);