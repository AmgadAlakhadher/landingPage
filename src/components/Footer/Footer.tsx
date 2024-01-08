import { memo } from 'react'
import cls from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={`${cls.footer}`}>
      <div className="mcontainer">
        <div className={`${cls.footer__top}`}>
          <h3 className={`${cls.footer__top_title} capitalize`}>join our mailing list to receive the news & latest trends</h3>
          <div className={`${cls.footer__top_subscribe}`}>
            <input type="email" name="email" id="email" placeholder='Email Address...' className={`${cls.footer__top_subscribe_email}`} />
            <button type="submit" className='capitalize'>subscribe now </button>
          </div>
        </div>
        {/* <div className={`${cls.footer__center} row`}>
          <div className={`${cls.footer__center__item} col-lg-3 col-md-12 col-12`}>
            <h4 className={`${cls.footer__center__item_title}`}>contact us</h4>
            <div className={`${cls.footer__center__item_links}`}>
              <p>kazan, chepaksa, russia</p>
              <p>89379796609</p>
              <a href="#">amjad_ahmedw7@yahoo.com</a>
            </div>
          </div>
        </div> */}
        <div className={`${cls.footer__bottom}`}>
        <p className={`${cls.footer__bottom_copyright}`}>Copyright &#169; 2024 <a href='https://github.com/AmgadAlakhadher' target='_blank'>AmgadAlakhadher</a>. All Rights Reserved.</p>
        <p className={`${cls.footer__bottom_}`}>Design: TemplateMo</p>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)