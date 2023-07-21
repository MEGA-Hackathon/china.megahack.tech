import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import Styles from './MegaIdeaHack.module.css';
import { useTranslation } from 'react-i18next';
import FAQ from '../components/FAQ';

function MegaIdeaHack() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, []);

    const lng = navigator.language;

    const [visible, setVisible] = useState(false);


    return (
    <>
        <Navbar/>
        
        <div className={Styles.snakeDiv}>
            <div className={Styles.snake}>
                <div className={Styles.snakeText1}>
                {t('idea.snaketext1')} 
                </div>
                <div className={Styles.snakeImg1}>
                <img src="/line1.svg" alt="snake" />
                </div>
                <div className={Styles.snakeText2}>
                {t('idea.snaketext2')} 
                </div>
                <div className={Styles.snakeImg2}>
                <img src="/line2.svg" alt="snake" />
                </div>
                <div className={Styles.snakeText3}>
                {t('idea.snaketext3')}
                </div>
                <div className={Styles.snakeImg3}>
                <img src="/line3.svg" alt="snake" />
                </div>
                <div className={Styles.snakeText4}>
                {t('idea.snaketext4')}
                </div>
                <div className={Styles.snakeImg4}>
                <img src="/line4.svg" alt="snake" />
                </div>
            </div>

            <div className={Styles.snakeMobile}>
                <div className={Styles.snakeText}>
                {t('idea.snaketext1')} 
                </div>
                <div className={Styles.snakeImg}>
                <img src="/snake1.svg" alt="snake" />
                </div>
                <div className={Styles.snakeText}>
                {t('idea.snaketext2')} 
                </div>
                <div className={Styles.snakeImg}>
                <img src="/snake2.svg" alt="snake" />
                </div>
                <div className={Styles.snakeText}>
                {t('idea.snaketext3')} 
                </div>
                <div className={Styles.snakeImg}>
                <img src="/snake1.svg" alt="snake" />
                </div>
                <div className={Styles.snakeText}>
                {t('idea.snaketext4')} 
                </div>
                <div className={Styles.snakeImg}>
                <img src="/snake2.svg" alt="snake" />
                </div>
            </div>

            <div className={Styles.megaIdeaHackDiv}>
                <div className={Styles.megaIdeaHack}>
                <div className={Styles.megaIdeaHackHead}>
                MEGA IDEAHACK 
                </div>
                <div className={Styles.megaIdeaHackText}>
                    <div>2023.7.22-25</div> 
                    <div>{t('idea.city1')} </div> 
                    <div>
                    {t('idea.city2')}
                    </div> 
                </div>
                </div>
                <div className={Styles.megaIdeaHackImg}>
                <img src="/landslide.svg" alt="slide" />
                </div>
            </div>
            </div>


            <div className={Styles.goals}>
            <div className={Styles.goalsText}>
                {t('idea.goaltext')}
            </div>
            <div className={Styles.goalsImg}>
                <img src="/goals.svg" alt="goals" />
            </div>
            <div className={Styles.goalsTag}>
            en_*具体问题和方向将会在后续推文放出，敬请期待。
            </div>
            </div>

            <div className={Styles.circleDiv}>
            <div className={Styles.yellow}>
                <div className={Styles.circle}></div>
            </div>
            <div className={Styles.circleText}>
                <div>
                {t('idea.circletext1')}
                </div>
                <div>
                {t('idea.circletext2')}
                </div>
            </div>
            <div className={Styles.circleCards}>
                <img src="/cards.svg" alt="cards" />
            </div>
            </div>

            <div className={Styles.college_images}>
            <div className={Styles.colleges}>
                {t('idea.colleges')}
            </div>
            <div className={Styles.college_image}>
                <img src="/Group 46.svg" alt="College List" />
            </div>
            </div>


       
            <div className={Styles.coffee_chat}>
            <div className={Styles.coffee_shapes}>
                <div className={Styles.coffee_shape}>
                <img src="/Vector (1).svg" alt="Star" />
                <img src="/Vector (2).svg" alt="Triangle" />
                <img src="/Vector (3).svg" alt="Stairs" />
                </div>
            </div>
            <div className={Styles.coffeeText}>
                {t('idea.coffeetext')}
            </div>
            <div className={Styles.coffeeButtons}>
                <div>{t('idea.cobut1')}</div>
                <div>{t('idea.cobut2')}</div>
                <div>{t('idea.cobut3')}</div>
                <div>{t('idea.cobut4')}</div>
                <div>{t('idea.cobut5')}</div>
                <div>{t('idea.cobut6')}</div>
                <div>{t('idea.cobut7')}</div>
                <div>{t('idea.cobut8')}</div>
                <div>{t('idea.cobut9')}</div>
                <div>{t('idea.cobut10')}</div>
                <div>{t('idea.cobut11')}</div>
                <div>{t('idea.cobut12')}</div>
            </div>
            </div>

            <div className={Styles.ending}>
            <div className={Styles.endingHead}>{t('idea.partnerhead')}</div>
            <div className={Styles.endingText}>
                {t('idea.endingtext')}
            </div>
            <div className={Styles.endingYellow}>
                <div>{t('idea.endingyellow1')}</div>
                <div>{t('idea.endingyellow2')}</div>
            </div>
            <div className={Styles.endingSignup}>
                {t('idea.signup')}
            </div>
            </div>


        <FAQ/>

        <div className={Styles.partners}>
            <div className={Styles.past_partners}>{t('idea.partnerhead')}</div>
            <div className={Styles.partner_image}><img src="/image 24.svg" alt="Past Partners"/></div>
            <div className={Styles.looking_forward}>{t('idea.looking1')}<br/>{t('idea.looking2')}</div>
        </div>
        <ContactUs/>
    </>
    )
}

export default MegaIdeaHack