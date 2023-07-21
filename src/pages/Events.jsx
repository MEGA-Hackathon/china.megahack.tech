import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import PastEvents from '../components/PastEvents';
import Styles from "./Homepage.module.css";
import "./Events.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';


export default function Events() {
  const { t } = useTranslation();
  const navigate=useNavigate()

  const handleSignUp = () => {
    window.open("https://mega-hackathon-2023-summer.devpost.com/", "_blank");
  };
  
  return (
    <>
      <Navbar />
      
    <div className='child-container'>       
      <div className={Styles.div1Content} style={{ paddingBottom: '10rem'}}>
        <div className={Styles.hot} style={{color: 'black'}}>Upcoming Event</div>
        <div className={Styles.megaHeading}>mega</div>
        <div className={Styles.megaHeading}>ideahack</div>
        <div className={Styles.megaHeading}>202307</div>
        <div className={Styles.div1Text}>{t("event.text")}</div>
        <div className={Styles.div1Buttons}>
          <div className={Styles.div1signUp} onClick={handleSignUp}>
            {t("heroSection.signup")}
          </div>

          <div className={Styles.div1LearnMore} onClick={()=>navigate('/MegaIdeaHack')}>
            {t("heroSection.learnmore")}
          </div>
        </div>
      </div>

      <div className={Styles.posterDiv}>
        <div className={Styles.poster}>
          <img src="/poster.png" alt="poster" />
        </div>
      </div>
      <ContactUs />
    </div>
  );
}


