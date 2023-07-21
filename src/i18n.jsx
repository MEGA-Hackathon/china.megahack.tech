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
            },
            faq: {
              que1:"Can everyone participate? Are there any major/language requirements?",
              que2:"How long will it take to receive a notification after filling out the application?",
              que3:"Is there a specific schedule?",
              que4:"Can I participate if I have no project foundation/no idea?",
              que5:"What do I get?",
              que6:"Can I participate as a teaching assistant/guest?",
              ans1:"Our program is mainly aimed at students, outstanding high school and college students are welcome to apply. There are no professional restrictions, but it does require you to have a mindset that is willing to explore and learn about different areas. With the exception of a few guest speakers and coffee chats, which will be in English (dont worry, there will be translations, of course, you can use this opportunity to practice your English academic communication), most of them will be in Chinese.",
              ans2:"The early bird wheel will be notified within 2-3 weeks. The result may be : Admission (Welcome to MEGA! Reply within 10 days + deposit)/Standby (if a standby is confirmed, it will be automatically notified when a space becomes available)/declined",
              ans3:"Stay tuned for more tweets - be sure to follow the MEGA account!",
              ans4:"Yes - our programs are designed to foster innovative thinking and the ability to collaborate across fields. We will provide you with a range of training and resources to help you understand the project process and stimulate your creativity and ideas. In addition, you will have the opportunity to collaborate with other participants to explore and complete a meaningful and innovative project.",
              ans5:"Over the course of three days, you will be led by a prestigious (US Top20/ UK G5/ China C9) teaching assistant and like-minded friends from different fields and backgrounds to propose, complete and present an innovative project based on UN 17 goals. Outstanding projects will be funded for further development. You will have the opportunity to meet and Coffee Chat with popular industry leaders. You will have an unforgettable friendship and unique summer memories:)",
              ans6:"Welcome to send your resume to megachinaoffical@gmail.com, we will get back to you within a week! Look forward to your joining.",
              faqhead:"Frequently Asked Questions",
              moreq1:"More questions?",
              moreq2:"Please private small assistant, wechat QR code is below."
            },
            idea: {
              snaketext1:"Want to meet people with similar interests but different majors and interests?",
              snaketext2:"With the fields of reinforcement learning, GPT4, large language models, and AGI evolving so rapidly, are you curious about how you can make your mark in the future?",
              snaketext3:"Want to turn your quest and sense of purpose into tangible action?",
              snaketext4:"Want to use your knowledge and skills to make a positive difference in society?",
              city1:"Shanghai",
              city2:"China",
              goaltext:"MEGA China's new project will focus on three to four of the 17 Sustainable Development Goals (SDGS) of the United Nations, looking for realistic issues related to them.",
              circletext1:"You will team up with other participants and, under the guidance of well-known university teaching assistants and industry leaders, jointly design solutions, create related works and develop landing projects in three days from the United Nations Sustainable Development Goals. It can take the form of a charity campaign, a research proposal, a web application, or a work of art.",
              circletext2:"At the end of the event, there will be a result-sharing display where your projects will be reviewed and awarded by experts. The proposal produced by the winning group will have the opportunity to land directly, and the members of the group will also receive generous rewards, including but not limited to financial and technical support, and related internship opportunities.",
              colleges:"*MEGA College teaching assistants come from but are not limited to",
              coffeetext:"In addition, we invited academics and industry experts from North America and Asia to share cutting-edge information and present their industry insights. You also have the opportunity to have one-to-one coffee chat with senior students from top universities such as Harvard, MIT, Stanford, etc. in all walks of life, to freely socialize, ask questions, and discuss career planning.",
              cobut1:"Chief economist",
              cobut2:"Security",
              cobut3:"Dr. MIT",
              cobut4:"Head of the Medical Biology department",
              cobut5:"Associate Editor Autophagy",
              cobut6:"Public health",
              cobut7:"Policy researcher",
              cobut8:"ESG Consultant",
              cobut9:"Funding millions of serial entrepreneurs",
              cobut10:"Head VC capital",
              cobut11:"Founder of several public welfare organizations",
              cobut12:"Google Games",
              endingtext:"MEGA warmly invites you to participate in the upcoming MEGA Summer Fusion Program! Here, we focus on sustainable development, innovation and exchange of ideas; Here, you will give full play to your potential to develop valuable and influential products; Here, you will have the opportunity to join hands with like-minded friends and turn ideas into reality. We are very much looking forward to your joining, let us work together to create the future!",
              endingyellow1:"Activity Time:",
              endingyellow2:"Beijing Time from July 22 to July 24, 2023",
              signup:"Sign up now",
              partnerhead:"Past Partners",
              looking1:"Looking forward to seeing you in the summer,",
              looking2:"MEGA Team"

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
            },
            faq: {
              que1: "每个人都可以参加吗？有没有专业/语言要求？",
              que2: "填写申请后多久能收到通知？",
              que3: "有具体的日程安排吗？",
              que4: "如果我没有项目基础或者想法，我可以参加吗？",
              que5: "我能得到什么？",
              que6: "我可以作为教学助理/嘉宾参加吗？",
              ans1: "我们的项目主要面向学生，欢迎优秀的高中生和大学生申请。没有专业限制，但需要您愿意探索和学习不同领域的心态。除了少数嘉宾演讲和咖啡聊天将用英文进行（别担心，会有翻译的，当然您也可以借此机会练习英语学术交流），大部分内容都会是中文进行。",
              ans2: "早鸟轮会在填写申请后的2-3周内收到通知。结果可能是：录取（欢迎来到MEGA！10天内回复+缴纳押金）/候补（如果确认候补，将在有空位时自动通知）/拒绝",
              ans3: "敬请关注更多推文 - 记得关注MEGA的账号！",
              ans4: "可以的 - 我们的项目旨在培养创新思维和跨领域合作能力。我们将为您提供一系列培训和资源，帮助您了解项目流程，激发您的创造力和想法。此外，您将有机会与其他参与者合作，探索并完成一项有意义且创新的项目。",
              ans5: "在三天的活动中，您将由一位来自著名（美国Top20/英国G5/中国C9）大学的助教和来自不同领域和背景的志同道合的朋友带领，基于联合国17个可持续发展目标提出、完成并展示一项创新项目。优秀项目将获得资金支持进行进一步发展。您还将有机会与知名行业领袖进行交流。您将拥有难忘的友谊和独特的夏季回忆：）",
              ans6: "欢迎将您的简历发送至megachinaoffical@gmail.com，我们将在一周内回复！期待您的加入。",
              faqhead: "常见问题",
              moreq1: "还有更多问题吗？",
              moreq2: "请通过邮件或电话与我们的客户支持联系。",
            },
            idea: {
              snaketext1: "想要遇见志趣相投但专业和兴趣不同的人吗？",
              snaketext2: "随着强化学习、GPT4、大型语言模型和AGI领域的飞速发展，你是否好奇如何在未来留下自己的印记？",
              snaketext3: "想要将你的探索和目标转化为切实的行动吗？",
              snaketext4: "想要运用你的知识和技能为社会带来积极的变化吗？",
              city1: "上海",
              city2: "中国",
              goaltext: "MEGA中国的新项目将聚焦于联合国17个可持续发展目标中的三到四个，寻找与其相关的现实问题。",
              circletext1: "在三天的活动中，您将与其他参与者组成团队，在知名大学助教和行业领袖的指导下，共同设计解决方案、创建相关作品，并根据联合国可持续发展目标开发实际项目。这些项目可以采取慈善活动、研究提案、Web应用或艺术作品的形式。",
              circletext2: "活动结束时，将举行成果展示，您的项目将由专家评审并颁奖。获胜小组提出的提案将有机会直接落地，小组成员还将获得丰厚的奖励，包括但不限于资金和技术支持以及相关实习机会。",
              colleges: "*MEGA大学助教来自但不限于以下学校",
              coffeetext: "此外，我们还邀请了来自北美和亚洲的学者和行业专家分享前沿信息并展示他们的行业观点。您还有机会与哈佛、麻省理工学院、斯坦福等顶尖大学的各个领域的高年级学生进行一对一的咖啡聊天，自由交流、提问和讨论职业规划。",
              cobut1: "首席经济学家",
              cobut2: "安全",
              cobut3: "麻省理工博士",
              cobut4: "医学生物学系主任",
              cobut5: "《Autophagy》副编辑",
              cobut6: "公共卫生",
              cobut7: "政策研究员",
              cobut8: "ESG顾问",
              cobut9: "资助数百位创业者",
              cobut10: "风险投资资本负责人",
              cobut11: "多家公益组织创始人",
              cobut12: "谷歌游戏",
              endingtext: "MEGA热情邀请您参加即将到来的MEGA夏季融合项目！在这里，我们关注可持续发展、创新和思想交流；在这里，您将充分发挥潜力，开发有价值和影响力的产品；在这里，您将有机会与志同道合的朋友携手合作，把想法变为现实。我们非常期待您的加入，让我们共同创造未来！",
              endingyellow1: "活动时间：",
              endingyellow2: "北京时间2023年7月22日至7月24日",
              signup: "立即报名",
              partnerhead: "过往合作伙伴",
              looking1: "期待在夏天见到你，",
              looking2: "MEGA团队"
            }
          }
        }
      }
      
      
  });

export default i18n;