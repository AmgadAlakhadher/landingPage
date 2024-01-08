import { memo } from 'react';
import cls from './clients.module.scss';
import { HeaderSection, Stars } from '..';
import img from '../../assets/images/quote.png';
import imgProfile from '../../assets/images/profile-picture.jpeg';
const Clients = () => {
  return (
    <section className={`${cls.clients} pt_130`}>
      <div className="mcontainer">
        <HeaderSection 
            title={
                <>
                    check what <span>the clients say </span>about our app dev
                </>
            }
            description={
                <>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.
                </>
            }
        />

        <div className={`${cls.clients__items} row`}>
          <div className={`${cls.clients__left} col-lg-7 col-md-12 col-12`}>
            <div className={`${cls.clients__left__workers} capitalize`}>
              <div className={`${cls.clients__left__worker} ds_flex`}>
                <div className={`${cls.clients__left__worker_info}`}>
                  <h4 className={`${cls.name} ${cls.active}`}>david Martino Co</h4>
                  <p className={`${cls.date}`}>30 november 2021</p>
                </div>
                <p className={`${cls.clients__left__workers_job}`}>financial apps</p>
                <div className={`${cls.clients__left__workers_rating}`}>
                  <Stars raiting={4.8} active/>
                </div>
              </div>
              <div className={`${cls.clients__left__worker} ds_flex`}>
                <div className={`${cls.clients__left__worker_info}`}>
                  <h4 className={`${cls.name}`}>jake harris nyo</h4>
                  <p className={`${cls.date}`}>29 november 2021</p>
                </div>
                <p className={`${cls.clients__left__workers_job}`}>digital business</p>
                <div className={`${cls.clients__left__workers_rating}`}>
                  <Stars raiting={4.5}/>
                </div>
              </div>
              <div className={`${cls.clients__left__worker} ds_flex`}>
                <div className={`${cls.clients__left__worker_info}`}>
                  <h4 className={`${cls.name}`}>may catherina Co</h4>
                  <p className={`${cls.date}`}>27 november 2021</p>
                </div>
                <p className={`${cls.clients__left__workers_job}`}>business & economics</p>
                <div className={`${cls.clients__left__workers_rating}`}>
                  <Stars raiting={4.7}/>
                </div>
              </div>
              <div className={`${cls.clients__left__worker} ds_flex`}>
                <div className={`${cls.clients__left__worker_info}`}>
                  <h4 className={`${cls.name}`}>random user</h4>
                  <p className={`${cls.date}`}>24 november 2021</p>
                </div>
                <p className={`${cls.clients__left__workers_job}`}>new app ecosystem</p>
                <div className={`${cls.clients__left__workers_rating}`}>
                  <Stars raiting={3.9}/>
                </div>
              </div>
              <div className={`${cls.clients__left__worker} ds_flex`}>
                <div className={`${cls.clients__left__worker_info}`}>
                  <h4 className={`${cls.name}`}>mark amber do</h4>
                  <p className={`${cls.date}`}>21 november 2021</p>
                </div>
                <p className={`${cls.clients__left__workers_job}`}>web development</p>
                <div className={`${cls.clients__left__workers_rating}`}>
                  <Stars raiting={4.3}/>
                </div>
              </div>
            </div>
          </div>           
          <div className={`${cls.clients__right} col-lg-5 col-md-12 col-12`}>
            <div className={`${cls.clients__right_desc}`}>
              <img src={img} alt="image" />
              <p className={`${cls.clients__right_desc_txt} `}>
                “Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”
              </p>
            </div>
            <div className={`${cls.clients__right__client} ds_flex`}>
              <div className={`${cls.clients__right__client_boxImg} `}>
                <img src={imgProfile} alt="photo" />
              </div>
              <div className={`${cls.clients__right__client__info}`}>
                <h3 className={`${cls.clients__right__client__info_company} `}>david martino</h3>
                <p className={`${cls.clients__right__client__info_job}`}><span style={{textTransform: 'uppercase'}}>ceo</span> of david company</p>
              </div>
            </div>
          </div>           
        </div>
      </div>
    </section>
  )
}

export default memo(Clients);