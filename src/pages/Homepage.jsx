import React, { useEffect, useState } from 'react'
import Styles from './Homepage.module.css'
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const handleDropdown = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng)
    }, [])

    const lng = navigator.language

    const handleSignUp = () => {
        window.open("https://mega-hackathon-2023-summer.devpost.com/", '_blank');
    };

    const navigateToHome = () => {
        navigate('/')
        console.log('Navigating to Home');
    };

    const navigateToAboutUs = () => {
        navigate('/AboutUs')
        console.log('Navigating to About Us');
    };

    const navigateToEvents = () => {
        navigate('/Events')
        console.log('Navigating to Events');
    };

    const navigateToResources = () => {
        navigate('/Resources')
        console.log('Navigate to Resources')
    }

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };


    return (
        <>

            {/* Hero-Section */}

            <div className={Styles.div1}>
                <div className={Styles.navbar}>
                    <div className={Styles.logo}>
                        <img src="/icon3.svg" alt="alt" />
                        <div className={Styles.logoText}>
                            <div>MEGA</div>
                            <div>CHINA</div>
                        </div>
                    </div>

                    <div className={Styles.tabs}>
                        <div className={Styles.tab} onClick={navigateToHome}>
                            {t('heroSection.tab1')}
                        </div>
                        <div className={Styles.tab} onClick={navigateToAboutUs}>
                            {t('heroSection.tab2')}
                        </div>
                        <div className={Styles.tab} onClick={navigateToEvents}>
                            {t('heroSection.tab3')}
                        </div>
                        <div className={Styles.tab} onClick={scrollToBottom}>
                            {t('heroSection.tab4')}
                        </div>
                    </div>

                    {/* Mobile version dropdown */}
                    <div className={Styles.mobileDropdown}>
                        <div className={Styles.menuIcon} onClick={handleDropdown}>
                            &#9776;
                        </div>
                        <div className={`${Styles.dropdownContent} ${isMenuOpen ? Styles.show : ''}`}>
                            <div className={Styles.tab} onClick={navigateToHome}>
                                {t('heroSection.tab1')}
                            </div>
                            <div className={Styles.tab} onClick={navigateToAboutUs}>
                                {t('heroSection.tab2')}
                            </div>
                            <div className={Styles.tab} onClick={navigateToEvents}>
                                {t('heroSection.tab3')}
                            </div>
                            <div className={Styles.tab} onClick={scrollToBottom}>
                                {t('heroSection.tab4')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.div1Content}>
                    <div className={Styles.hot}>{t('heroSection.hot')}</div>
                    <div className={Styles.megaHeading}>mega</div>
                    <div className={Styles.megaHeading}>ideahack</div>
                    <div className={Styles.megaHeading}>202307</div>
                    <div className={Styles.div1Text}>
                        {t('heroSection.text')}
                    </div>
                    <div className={Styles.div1Buttons}>

                        <div className={Styles.div1signUp} onClick={handleSignUp}>{t('heroSection.signup')}</div>

                        <div className={Styles.div1LearnMore} onClick={navigateToAboutUs}>{t('heroSection.learnmore')}</div>
                    </div>

                </div>

                <div className={Styles.posterDiv}>
                    <div className={Styles.poster}>
                        <img src="/poster.png" alt="poster" />
                    </div>
                </div>

            </div>

            {/* WhoWeARe-Section */}

            <div className={Styles.intro}>
                <div className={Styles.tiltDiv}></div>
                <div className={Styles.cards}>
                    <div className={Styles.card}>
                        <div className={Styles.cardImage}>
                            <img src="/vector4.svg" alt="shape" />
                        </div>
                        <div className={Styles.cardContent}>
                            <div className={Styles.cardHead}>{t('intro.cardhead1')}</div>
                            <div className={Styles.cardText}>{t('intro.cardtext1')}</div>
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
                <div align="center">
                    <div className={Styles.learnMore} onClick={navigateToResources}>{t('intro.learnmore')}</div>
                </div>

            </div>

            {/* Events-Section */}

            <div className={Styles.eventHead} >
                <div align="center">
                    <div className={Styles.eventTitle}>Events</div>
                    <div className={Styles.activity}>{t('event.activity')}</div>
                </div>
            </div>


            <div className={Styles.event}>
                <div className={Styles.eventDisplay}>
                    <div className={Styles.eventPoster}>
                        <img src="/events-image1.png" alt="event Image" />
                    </div>
                    <div className={Styles.eventContent}>
                        <div className={Styles.hot2}>{t('event.hot')}</div>
                        <div className="eventTitle">
                            <div className={Styles.megaHeading2}>mega</div>
                            <div className={Styles.megaHeading2}>ideahack</div>
                        </div>

                        <div className={Styles.date}>2023.7.22 - 24</div>
                        <div className={Styles.date}>{t('event.city')}</div>
                        <div className={Styles.div3Buttons}>
                            <div className={Styles.div3signUp} onClick={handleSignUp}>{t('event.signup')}</div>
                            <div className={Styles.div3LearnMore} onClick={navigateToEvents}>{t('event.learnmore')}</div>
                        </div>
                    </div>
                </div>

                <div className={Styles.eventCards}>
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
                        <div className={Styles.div3LearnMore2} onClick={navigateToAboutUs}>{t('event.learnmore')}</div>
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
                            <div className={Styles.cardHead2}>{t('event.cardhead1')}</div>
                            <div className={Styles.cardText2}>{t('event.cardtext1')}</div>
                        </div>
                        <div className={Styles.div3LearnMore2} onClick={navigateToAboutUs}>{t('event.learnmore')}</div>
                    </div>
                </div>
                <div className={Styles.eventMore}>
                    <div className={Styles.more}>{t('event.more')}</div>
                </div>
            </div>

            {/* Sponsor-Section */}

            <div className={Styles.sponsors}>
                <img src="/sponsors@2x.png" alt="sponsors" />
            </div>


            {/* ContactUs-Section */}
            <div className={Styles.contactUs}>
                <div className={Styles.contactContent}>
                    <div align="center">
                        <div className={Styles.contactHead}>{t('contact.contacthead')}</div>
                    </div>

                    <div className={Styles.contactQR}>
                        <img src="/Group 21.png" alt="qr code" />
                    </div>
                    <div className={Styles.copyright}>© 2023 MEGA League. All Rights Reserved</div>
                    <div className={Styles.email}>megachinaoffical@gmail.com</div>
                </div>
            </div>


        </>
    )
}

export default Homepage