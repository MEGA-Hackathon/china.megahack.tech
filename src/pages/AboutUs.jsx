import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import Styles from './AboutUs.module.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);


  const navigateToMegaWeb = () => {
    window.open("https://megahack.tech/")
    console.log('Navigating to About Us');
  };

  const lng = navigator.language;

  return (
    <>
      <Navbar />

      <div className={Styles.cards}>
        <div className={Styles.card}>
          <div className={Styles.cardImage}>
            <img src="/vector4.svg" alt="shape" />
          </div>
          <div className={Styles.text}>
            <div className={Styles.cardContent}>
              <div className={Styles.cardHead}>{t('intro.cardhead1')}</div>
              <div className={Styles.cardText}>{t('intro.cardtext1')}</div>
            </div>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.cardImage}>
            <img src="/Vector.png" alt="shape" />
          </div>
          <div className={Styles.cardContent}>
            <div className={Styles.cardHead}>{t('intro.cardhead2')}</div>
            <div className={Styles.cardText}>{t('intro.cardtext2')}</div>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.cardImage}>
            <img src="/union.svg" alt="shape" />
          </div>
          <div className={Styles.cardContent}>
            <div className={Styles.cardHead}>{t('intro.cardhead3')}</div>
            <div className={Styles.cardText}>{t('intro.cardtext3')}</div>
          </div>
        </div>
      </div>
      <div className={Styles.midText}>
        <div className={Styles.midText1}>{t('aboutus.midtext1')}</div>
        <div className={Styles.midText2}>{t('aboutus.midtext2')}</div>
      </div>

      <div className={Styles.triangleDiv}>
        <div className={Styles.triImg}>
          <img src="/triangle.svg" alt="tri" />
        </div>
        <div className={Styles.triContent}>
          <div className={Styles.triText}>{t('aboutus.tritext')}</div>
          <div className={Styles.triLearn} onClick={navigateToMegaWeb}>{t('aboutus.learn')}</div>
        </div>
      </div>

      <div className={Styles.allianceHead}>
        <div>MEGA</div>
        <div>{t('aboutus.alliancehead')}</div>
      </div>

      <div className={Styles.alliance}>
        <div className={Styles.allianceText}>
          {t('aboutus.alliancetext')}
        </div>
        <div className={Styles.allianceImg}>
          <img src="/alliance.jpg" alt="ally" />
        </div>
      </div>

      <div className={Styles.college_images}>
        <div className={Styles.college_image}>
          <img src="/Group 46.svg" alt="College List" />
        </div>
      </div>

      <div className={Styles.testimonialsHead}>
        <div>{t('aboutus.testimonialshead')}</div>
      </div>

      <div className={Styles.textDiv}>
        <div className={Styles.testDiv}>
          <div className={Styles.shapeContainer}>
            <div className={Styles.shape1}>
              <img src="/vector11.svg" alt="" />
            </div>
            <div className={Styles.shape1}>
              <img src="/vector11.svg" alt="" />
            </div>
            <div className={Styles.shape1}>
              <img src="/vector11.svg" alt="" />
            </div>
            <div className={Styles.shape1}>
              <img src="/vector12.svg" alt="" />
            </div>
            <div className={Styles.shape1}>
              <img src="/vector12.svg" alt="" />
            </div>
            <div className={Styles.shape1}>
              <img src="/vector16.svg" alt="" />
            </div>
            <div className={Styles.shape1}>
              <img src="/vector19.svg" alt="" />
            </div>
            <div className={Styles.shape1}>
              <img src="/vector19.svg" alt="" />
            </div>
          </div>
          <div className={Styles.testCard} style={{ marginLeft: '25px' }}>
            <div className={Styles.testCardTest}>
              {t('aboutus.testcardtext1')}
            </div>
            <div className={Styles.testCardName}>{t('aboutus.testcardname1')}</div>
          </div>
          <div className={Styles.testCard}>
            <div className={Styles.testCardTest}>
              {t('aboutus.testcardtext2')}
            </div>
            <div className={Styles.testCardName}>{t('aboutus.testcardname2')}</div>
          </div>
          <div className={Styles.testCard}>
            <div className={Styles.testCardTest}>
              {t('aboutus.testcardtext3')}
            </div>
            <div className={Styles.testCardName}>{t('aboutus.testcardname3')}</div>
          </div>
          <div className={Styles.testCard} style={{ marginRight: '25px' }}>
            <div className={Styles.testCardTest}>
              {t('aboutus.testcardtext4')}
            </div>
            <div className={Styles.testCardName}>{t('aboutus.testcardname4')}</div>
          </div>
        </div>
      </div>

      <ContactUs />
    </>
  );
}

export default AboutUs;
