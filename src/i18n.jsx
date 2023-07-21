import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
          translation: {
            greeting: {
              hello: "Hello World!"
            },
            heroSection: {
              tab1: "Home page",
              tab2: "About us",
              tab3: "Events",
              tab4: "Contact us",
              hot: "HOT REGISTRATION!",
              text: "You will team up with other participants and, under the guidance of well-known university teaching assistants and industry leaders, jointly design solutions, create related works and develop landing projects in three days from the United Nations Sustainable Development Goals.",
              signup: "Sign up now",
              learnmore: "Learn more"
            },
            intro: {
              cardhead1: "Who we are?", 
              cardhead2: "What do we do?", 
              cardhead3: "What do we do?",
              cardtext1: "In 2019, MEGA was co-founded by a group of innovators from top global institutions in Princeton, USA. The fields covered include, but are not limited to, technology, engineering, design, art, business, social and natural sciences.", 
              cardtext2: "MEGA aims to encourage and assist outstanding young people to explore their potential, explore diverse cognition, and with the support of MEGA, develop project products with value and influence oriented towards solving practical problems through their own abilities and development.", 
              cardtext3: "MEGA has set up implementation sites around the world and is supported by more than 30 businesses, technology companies and NGOs. Members innovate and collaborate in areas such as the environment, education and healthcare to provide viable solutions, and have received financial support and internship opportunities.", 
              learnmore: "Learn more"
            },
            event: {
              activity: "Wonderful activity",
              hot: "HOT REGISTRATION",
              city: "Shanghai, China",
              signup: "Sign up now",
              learnmore: "Learn more",
              cardbar1: "Studio",
              cardbar2: "Hackathon",
              cardbar3: "Hackathon",
              cardbar4: "Debate",
              cardhead1: "Use AI to tell digital stories",
              cardhead2: "MEGA HACKATHON 2023",
              cardhead3: "MEGA HACKATHON 2022",
              cardhead4: "MEGA International Debate 2023",
              cardtext1: "MEGA teamed up with Columbia doctoral students and professors from Love and the Future to educate young people about the importance of digital storytelling through this transformative course on artificial intelligence and its impact on the climate.",
              cardtext2: "Like last year, the MEGA Hackathon hosted another hackathon event in 2023 that focused on real-world issues.",
              cardtext3:"Our first annual super hackathon. That's great! The winner receives an internship and a prize of more than $50,000.",
              cardtext4:"The MEGA Hackathon is hosting its first annual debate. The debate will focus on UN Sustainable Development Goals like hackathons.",
              more: "more"
            },
            contact: {
              contacthead: "Contact Us"
            },
            aboutus: {
              midtext1:"After adequate preparation and organization,",
              midtext2:"MEGA will officially open a Chinese offline match point this summer!",
              tritext:"This is not only another expansion of MEGA's world map, but also a 'comprehensive' new project that brings together the resources and experience accumulated in the past. As we explore what's possible in China, from digital industries to environmental science, we also expect to see exciting new ideas in the social sciences, engineering, art and design, and economics and business. From visual communication to humanistic theory, here you will have the opportunity to experience a unique journey from scratch in every field.",
              learn:"Learn More",
              alliancehead:"Alliance Network",
              alliancetext:"The MEGA Alliance network is designed to help innovators better come together to help and achieve each other. This alliance network brings together participants from all MEGA's past events, and members meet regularly for fireside chats to discuss cutting-edge technologies and ideas, break down information silos, and grow together. In addition, new and existing members are matched based on factors such as academic background and career plans, and new members can receive long-term guidance and help from older members.",
              testimonialshead:"Past Testimonials",
              testcardtext1:"As a hardcore programming student, I had previously limited the application of programming to technical fields such as software engineering and machine learning. In MEGA's interdisciplinary lectures, I'm excited to get new facts. Now, I have a better understanding of the new possibilities of programming in the cultural industry, and understand that through digital language, programming can spark new sparks in digital art, game design, digital cultural heritage protection and other fields. I have a further understanding of the application value of my major",
              testcardtext2:"Social science is often described as an 'island discipline,' and I used to be anxious about getting a job. Although I have always been passionate about psychology and its theories, I have always felt limited by its traditional application. At MEGA's big game sharing session, the experience of industry seniors changed my previous view on psychological applications. Now, I prefer to combine my knowledge with the individual community. Provide a tailored framework of psychological resources for each marginalized group.",
              testcardtext3:"I fully enjoyed teaming up with people from diverse cultural, ethnic, and national backgrounds. Through having cross-cultural conversations, I was able to construct a new view on some universal subjects that I thought I understood before — like poverty, climate action, and gender equality. It was interesting to consider the perspectives and philosophies to these issues on a global scale.",
              testcardtext4:"Everyone had different approaches… which was mind-blowing. At the same time, everyone had amazing work ethics which inspired me to do better…my teammates were an indispensable part of my experience. Personally, I gained much more advanced executive and organizational skill as an outcome, and I plan to take what I learned further into my learning.",
              testcardname1:"- UCB Computer Science Agnes R.",
              testcardname2:"- UChicago tended to Riley, Z.",
              testcardname3:"- Princeton Health Policy, Sarah N.",
              testcardname4:"- USC Communications Samuel G.",

            } 
          }
        },
        zh: {
          translation: {
            heroSection: {
              tab1: "首页",
              tab2: "关于我们",
              tab3: "活动",
              tab4: "联系我们",
              hot: "火热报名中！",
              text: "您将与其他参与者组成团队，在知名大学助教和行业领袖的指导下，共同设计解决方案、创建相关作品，并根据联合国可持续发展目标在三天内开发实际项目。",
              signup: "立即报名",
              learnmore: "了解更多"
            },
            intro: {
              cardhead1: "我们是谁？",
              cardhead2: "我们做什么？",
              cardhead3: "我们做什么？",
              cardtext1: "2019年，一群来自全球顶尖院校的创新者在美国普林斯顿共同创立了MEGA。涉及的领域包括但不限于技术、工程、设计、艺术、商业、社会和自然科学。",
              cardtext2: "MEGA旨在鼓励和协助杰出青年发掘潜力，探索多元认知，并在MEGA的支持下，通过自身能力和发展，开发解决实际问题、具有价值和影响力的项目产品。",
              cardtext3: "MEGA在全球各地设有执行场地，并得到30多家企业、技术公司和非政府组织的支持。成员在环境、教育、医疗等领域进行创新合作，提供可行解决方案，并获得财务支持和实习机会。",
              learnmore: "了解更多"
            },
            event: {
              activity: "精 彩 活 动",
              hot: "火热报名中",
              city: "中国上海",
              signup: "立即报名",
              learnmore: "了解更多",
              cardbar1: "工作室",
              cardbar2: "黑客马拉松",
              cardbar3:"黑客马拉松",
              cardbar4:"辩论",
              cardhead1: "运用人工智能讲述数字故事",
              cardhead2: "MEGA黑客马拉松2023",
              cardhead3:"MEGA黑客马拉松2022",
              cardhead4:"MEGA国际辩论2022",
              cardtext1: "MEGA与哥伦比亚大学博士生和Love and the Future的教授合作，通过这门关于人工智能及其对气候影响的变革性课程，教育年轻人了解数字叙事的重要性。",
              cardtext2: "与去年一样，MEGA在2023年举办了另一场聚焦现实问题的黑客马拉松活动。",
              cardtext3:"我们的第一届年度超级黑客马拉松。那太棒了！获胜者将获得实习机会和超过 50,000 美元的奖金。",
              cardtext4:"MEGA Hackathon 即将举办首次年度辩论。辩论将重点关注黑客马拉松等联合国可持续发展目标",
              more: "更多"
            },
            contact: {
              contacthead: "联系我们"
            },
            aboutus: {
              midtext1: "经过充分的准备和组织，",
              midtext2: "MEGA将于今年夏季正式开设中国线下比赛点！",
              tritext: "这不仅是MEGA世界地图的又一次扩张，还是一个综合性的新项目，汇集了过去所积累的资源和经验。随着我们在中国探索可能性，从数字产业到环境科学，我们也期待在社会科学、工程学、艺术和设计、经济学和商业等领域看到令人兴奋的新想法。从视觉传达到人文理论，这里将有机会在每个领域从零开始体验一段独特的旅程。",
              learn: "了解更多",
              alliancehead: "联盟网络",
              alliancetext: "MEGA联盟网络旨在帮助创新者更好地相互联系、互助和实现。这个联盟网络汇集了MEGA过去所有活动的参与者，成员定期举行讨论会，探讨前沿技术和理念，打破信息壁垒，共同成长。此外，新成员和现有成员根据学术背景和职业规划等因素进行匹配，新成员可以从老成员那里获得长期的指导和帮助。",
              testimonialshead: "往届见证",
              testcardtext1: "作为一个热衷编程的学生，我之前将编程的应用范围局限于软件工程和机器学习等技术领域。在MEGA的跨学科讲座中，我对获取了新的见解。现在，我更好地了解到编程在文化产业中的新可能性，理解到通过数字语言，编程可以在数字艺术、游戏设计、数字文化遗产保护等领域激发新的火花。我对我的专业应用价值有了进一步的认识。",
              testcardtext2: "社会科学常被描述为一门“孤立学科”，我曾对找工作感到焦虑。虽然我一直对心理学及其理论充满热情，但我一直感到受到传统应用的限制。在MEGA的大游戏分享会上，产业资深人士的经验改变了我之前对心理学应用的看法。现在，我更倾向于将我的知识与个体社区相结合，为每个边缘化群体提供量身定制的心理资源框架。",
              testcardtext3: "我非常喜欢与来自不同文化、不同民族和不同国家背景的人合作。通过进行跨文化对话，我能够对一些我以前认为已经了解的普遍问题（如贫困、气候行动和性别平等）构建一个新的观点。考虑到这些问题在全球范围内的观点和理念是非常有趣的。",
              testcardtext4: "每个人都有不同的方法...这真是令人惊叹。与此同时，每个人都有令人赞叹的职业道德，这激励着我做得更好...我的队友是我经验中不可或缺的一部分。个人而言，作为结果，我获得了更先进的执行和组织能力，并计划将我所学到的进一步应用到我的学习中。",        
              testcardname1: "- 加州大学伯克利分校计算机科学 Agnes R.",
              testcardname2: "- 芝加哥大学心理学 Riley, Z.",
              testcardname3: "- 普林斯顿健康政策，Sarah N.",
              testcardname4: "- 南加州大学传媒，Samuel G."
            }
          }
        }
      }
      
      
  });

export default i18n;