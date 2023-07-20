import { useEffect } from 'react';
import './PastEvents.css';
import Styles from './PastEvents.module.css'
import { useTranslation, Trans } from 'react-i18next';

function PastEvents() {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng)
    }, [])

  const lng = navigator.language

  return (
<div className={Styles.PastEventsWrapper}>
        
    <div className={Styles.eventHeading}>
    <h2 className={Styles.eventHeadingH3}>EVENTS</h2>
    <h3>Wonderful past</h3>
    </div>
    
    <div className={Styles.eventCards}>
        <div className={Styles.eventDeck1}>
              <div className={Styles.eventCard}>
                  <div className={Styles.eventImage}>
                      <img src="/image-2@2x.png" alt="img" />
                  </div>
                  <div className={Styles.eventBar}>
                      <div className={Styles.eleft}>{t('event.cardbar1')}</div>
                      <div className={Styles.eright}>AI/ML</div>
                  </div>
                  <div className={Styles.cardContent2}>
                      <div className={Styles.cardHead2}>{t('event.cardhead1')}</div>
                      <div className={Styles.cardText2}>{t('event.cardtext1')}</div>
                  </div>
                  <div className={Styles.div3LearnMore2} onClick={()=>window.open("https://digitalstorytelling2023.megahack.tech", '_blank')}>{t('event.learnmore')}</div>
              </div>
              <div className={Styles.eventCard}>
                  <div className={Styles.eventImage}>
                      <img src="/image-3@2x.png" alt="img" />
                  </div>
                  <div className={Styles.eventBar2}>
                      <div className={Styles.eleft}>{t('event.cardbar2')}</div>
                      <div className={Styles.eright}>Competitiveness</div>
                  </div>
                  <div className={Styles.cardContent2}>
                      <div className={Styles.cardHead2}>{t('event.cardhead2')}</div>
                      <div className={Styles.cardText2}>{t('event.cardtext2')}</div>
                  </div>
                  <div className={Styles.div3LearnMore2} onClick={()=>window.open("https://hack2023.megahack.tech/", '_blank')}>{t('event.learnmore')}</div>
              </div>
              </div>

              <div className={Styles.eventDeck2}>
              <div className={Styles.eventCard}>
                  <div className={Styles.eventImage}>
                      <img src="/image-6@2x.png" alt="img" />
                  </div>
                  <div className={Styles.eventBar3}>
                      <div className={Styles.eleft}>{t('event.cardbar3')}</div>
                      <div className={Styles.eright}>Competitiveness</div>
                  </div>
                  <div className={Styles.cardContent2}>
                      <div className={Styles.cardHead2}>{t('event.cardhead3')}</div>
                      <div className={Styles.cardText2}>{t('event.cardtext3')}</div>
                  </div>
                  <div className={Styles.div3LearnMore2} onClick={()=>window.open("https://mega-hackathon-2023.devpost.com/project-gallery", '_blank')}>{t('event.learnmore')}</div>
              </div>
              <div className={Styles.eventCard}>
                  <div className={Styles.eventImage}>
                      <img src="/image-7@2x.png" alt="img" />
                  </div>
                  <div className={Styles.eventBar4}>
                      <div className={Styles.eleft}>{t('event.cardbar4')}</div>
                      <div className={Styles.eright}>Competitiveness</div>
                  </div>
                  <div className={Styles.cardContent2}>
                      <div className={Styles.cardHead2}>{t('event.cardhead4')}</div>
                      <div className={Styles.cardText2}>{t('event.cardtext4')}</div>
                  </div>
                  <div className={Styles.div3LearnMore2} onClick={()=>window.open("https://worldwidedebate.megahack.tech/", '_blank')}>{t('event.learnmore')}</div>
              </div>
          </div>
          </div>
          </div>

  )
}

export default PastEvents

// function PastEvents() {
//   return (
//     <div className='events-cont'>
//     <div className='past-events-heading'>
//     <h3>EVENTS</h3>
//     <h4>Wonderful past</h4>
//     </div>
//     <div className="grid-container">
//     <div className="grid-item">
//       <img src="image1.jpg" alt="Image 1" />
//       <h3>Card 1 Title</h3>
//       <p>Card 1 Content</p>
//       <a href="#learn-more">Learn More</a>
//     </div>
//     <div className="grid-item">
//       <img src="image1.jpg" alt="Image 1" />
//       <h3>Card 2 Title</h3>
//       <p>Card 2 Content</p>
//       <a href="#learn-more">Learn More</a>
//     </div>
//     <div className="grid-item">
//       <img src="image1.jpg" alt="Image 1" />
//       <h3>Card 3 Title</h3>
//       <p>Card 3 Content</p>
//       <a href="#learn-more">Learn More</a>
//     </div>
//     <div className="grid-item">
//       <img src="image1.jpg" alt="Image 1" />
//       <h3>Card 4 Title</h3>
//       <p>Card 4 Content</p>
//       <a href="#learn-more">Learn More</a>
//     </div>
   
//   </div>
//   </div>
//   )
// }

// export default PastEvents