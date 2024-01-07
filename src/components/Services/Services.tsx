import { memo } from 'react';
import cls from './services.module.scss';
import { FaArrowRight } from "react-icons/fa";
import { HeaderSection } from '..';

const Services = () => {
  return (
    <section className={`${cls.services} pt_130`}>
        <div className="mcontainer">
            <HeaderSection 
                title={
                    <>
                        amazing <span>services & features</span> for you
                    </>
                }
                description={
                    <>
                        If you need the greatest collection of HTML templates for your business, please visit <span>TooCSS</span> Blog. If you need to have a contact form PHP script, go to <span>our contact page</span> for more information.
                    </>
                }
            />
            <div className={`${cls.services__items} row`}>
                <div className={`${cls.services__item} col-lg-3 col-md-12 col-12`}>
                    <div className={`${cls.services__item__content} `}>
                        <div className={cls.services__item__content_icon}></div>
                        <h4 className={`${cls.services__item__content_title} capitalize`}>app maintenance</h4>
                        <p className={cls.services__item__content_desc}>
                        You are not allowed to redistribute this template ZIP file on any other website.
                        </p>
                        <a href="#" className={`${cls.services__item__content_link} capitalize`}>
                            <p className={cls.txt}>read more</p> <FaArrowRight className={cls.icon}/>
                        </a>
                    </div>
                </div>
                <div className={`${cls.services__item} col-lg-3 col-md-12 col-12`}>
                    <div className={`${cls.services__item__content} `}>
                        <div className={cls.services__item__content_icon}></div>
                        <h4 className={`${cls.services__item__content_title} capitalize`}>rocket speed of app</h4>
                        <p className={cls.services__item__content_desc}>
                        You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout.
                        </p>
                        <a href="#" className={`${cls.services__item__content_link} capitalize`}>
                            <p className={cls.txt}>read more</p> <FaArrowRight className={cls.icon}/>
                        </a>
                    </div>
                </div>
                <div className={`${cls.services__item} col-lg-3 col-md-12 col-12`}>
                    <div className={`${cls.services__item__content} `}>
                        <div className={cls.services__item__content_icon}></div>
                        <h4 className={`${cls.services__item__content_title} capitalize`}>multi workflow idea</h4>
                        <p className={cls.services__item__content_desc}>
                        If this template is beneficial for your work, please support us a little via PayPal. Thank you.
                        </p>
                        <a href="#" className={`${cls.services__item__content_link} capitalize`}>
                            <p className={cls.txt}>read more</p> <FaArrowRight className={cls.icon}/>
                        </a>
                    </div>
                </div>
                <div className={`${cls.services__item} col-lg-3 col-md-12 col-12`}>
                    <div className={`${cls.services__item__content} `}>
                        <div className={cls.services__item__content_icon}></div>
                        <h4 className={`${cls.services__item__content_title} capitalize`}>24/7 help & support</h4>
                        <p className={cls.services__item__content_desc}>
                        orem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.
                        </p>
                        <a href="#" className={`${cls.services__item__content_link} capitalize`}>
                            <p className={cls.txt}>read more</p> <FaArrowRight className={cls.icon}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default memo(Services);