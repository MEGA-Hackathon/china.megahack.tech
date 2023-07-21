import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import Styles from './MegaIdeaHack.module.css';
import { useTranslation } from 'react-i18next';

function MegaIdeaHack() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, []);

    const lng = navigator.language;

    return (
    <>
        <Navbar/>
        
        <div className={Styles.snakeDiv}>
            <div className={Styles.snake}>
                <div className={Styles.snakeText1}>
                Want to meet people with similar interests but different majors and interests?
                </div>
                <div className={Styles.snakeImg1}>
                    <img src="/line1.svg" alt="snake" />
                </div>
                <div className={Styles.snakeText2}>
                With the fields of reinforcement learning, GPT4, large language models, and AGI evolving so rapidly, are you curious about how you can make your mark in the future?
                </div>
                <div className={Styles.snakeImg2}>
                <img src="/line2.svg" alt="snake" />
                </div>
                <div className={Styles.snakeText3}>
                Want to turn your quest and sense of purpose into tangible action?
                </div>
                <div className={Styles.snakeImg3}>
                <img src="/line3.svg" alt="snake" />
                </div>
                <div className={Styles.snakeText4}>
                Want to use your knowledge and skills to make a positive difference in society? 
                </div>
                <div className={Styles.snakeImg4}>
                <img src="/line4.svg" alt="snake" />
                </div>
            </div>
            <div className={Styles.megaIdeaHackDiv}>
                <div className={Styles.megaIdeaHack}>
                    <div className={Styles.megaIdeaHackHead}>MEGA IDEAHACK</div>
                    <div className={Styles.megaIdeaHackText}>
                        <div>2023.7.22-25</div>
                        <div>Shanghai ,</div>
                        <div>China</div>
                    </div>
                </div>
                <div className={Styles.megaIdeaHackImg}>
                    <img src="/landslide.svg" alt="slide" />
                </div>
            </div>
        </div>

        <div className={Styles.goals}>
            <div className={Styles.goalsText}>
            MEGA China's new project will focus on three to four of the 17 Sustainable Development Goals (SDGS) of the United Nations, looking for realistic issues related to them.
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
                <div>You will team up with other participants and, under the guidance of well-known university teaching assistants and industry leaders, jointly design solutions, create related works and develop landing projects in three days from the United Nations Sustainable Development Goals. It can take the form of a charity campaign, a research proposal, a web application, or a work of art.</div>
                <div>At the end of the event, there will be a result-sharing display where your projects will be reviewed and awarded by experts. The proposal produced by the winning group will have the opportunity to land directly, and the members of the group will also receive generous rewards, including but not limited to financial and technical support, and related internship opportunities.</div>
            </div>
            <div className={Styles.circleCards}>
                <img src="/cards.svg" alt="cards" />
            </div>
        </div>

        <div className={Styles.college_images}>
            <div className={Styles.colleges}>*MEGA College teaching assistants come from but are not limited to</div>
        <div className={Styles.college_image}>
          <img src="/Group 46.svg" alt="College List" />
        </div>
        </div>

        <ContactUs/>
    </>
    )
}

export default MegaIdeaHack