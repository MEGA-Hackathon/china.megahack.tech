import React, {useEffect, useState} from 'react';
import Styles from './FAQ.module.css';
import { useTranslation, Trans } from 'react-i18next';

function FAQ() {
    let [data, setData] = useState([])

    const { t, i18n } = useTranslation();

      useEffect(() => {
          const lng = navigator.language;
          i18n.changeLanguage(lng)
          setData([
            {
              que: t('faq.que1'),
              ans: t('faq.ans1')
            },
            {
              que: t('faq.que2'),
              ans: t('faq.ans2')
            },
            {
              que: t('faq.que3'),
              ans: t('faq.ans3')
            },
            {
              que: t('faq.que4'),
              ans: t('faq.ans4')
            },
            {
              que: t('faq.que5'),
              ans: t('faq.ans5')
            },
            {
              que: t('faq.que6'),
              ans: t('faq.ans6')
            },
          ])
      }, [])

    const lng = navigator.language

    


    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
      if(selected === i){
        return setSelected(null)
      }

      setSelected(i)
    }

    
  return (
    <>
        <div className={Styles.wrapper}>
        <div className={Styles.FAQhead}>FAQ / {t('faq.faqhead')}</div>
            <div className={Styles.accordion}>
              {data.map((item, i) => (
                <div className={Styles.item} key={i}>
                  <div className={Styles.title} onClick={() => toggle(i)}>
                    <div>{item.que}</div>
                    <span><img src={selected === i ? "/arrowup.svg" : "/arrow.svg"} alt="" /></span>
                  </div>
                  <div className={selected === i ? `${Styles.content} ${Styles.show}` : Styles.content}>{item.ans}</div>
                </div>
              ))}
            </div>
          <div className={Styles.moreQ}>
                <div align="center">{t('faq.moreq1')}</div>
                <div align="center">{t('faq.moreq2')}</div>
            </div>
        </div>
    </>
  )
}

export default FAQ