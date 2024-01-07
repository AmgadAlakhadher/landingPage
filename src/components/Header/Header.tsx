import { memo, useRef } from 'react';
import cls from './header.module.scss';
import { FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const menu = useRef<HTMLDivElement>(null);
  const barsIcon = useRef<HTMLDivElement>(null);
  const onToggleMenu = () => {
    barsIcon.current?.classList.toggle(cls.change);
    menu.current?.classList.toggle(cls.change);
  }
  return (
    <header className={cls.header}>
      <div className="mcontainer">
        <nav className={`${cls.header__content} ds_flex`}>
          <div className={`${cls.header__content__left}`}>
            <a href='/' className={`${cls.header__content__left_logo} uppercase`}>logo</a>
          </div>
          <div className={`${cls.header__content__right}`}>
            <div className={`${cls.header__content__right__items}`} ref={menu}>
              <ul className={`${cls.header__content__right_list} capitalize`} >
                <li><a href='#' className={cls.active}>home</a></li>
                <li><a href='#'>services</a></li>
                <li><a href='#'>about</a></li>
                <li><a href='#'>pricing</a></li>
                <li><a href='#'>newsletter</a></li>
              </ul>
              <button className={`${cls.header__content__right__items_btn} ds_flex capitalize`}><FaSignInAlt className={cls.icon}/> sign in now</button>    
            </div>
            <div className={`${cls.barsIcon}`} onClick={onToggleMenu} ref={barsIcon}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default memo(Header);
