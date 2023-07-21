import React from 'react';
import Styles from './Resources.module.css'; // Import your CSS module here
import ExpandableDiv from './ExpandableDiv'; // Import the ExpandableDiv component here
import Card from './Card';
function Resources() {
    // Data for each row
    const rowData = ["Home page", "About us", "Events", "Contact us"];

    const rectanglesData = [
        { id: 1, color: '#7F5EDD' }, // Red
        { id: 2, color: '#9BA7FF' }, // Green
        { id: 3, color: '#AFB100' }, // Blue
        { id: 4, color: '#978500' }, // Yellow
        { id: 5, color: '#FF6B71' }, // Pink
        { id: 6, color: '#FFD600' }, // Light Blue
    ];

    const ExpandableData = [
        { title: 'Can everyone participate? Are there any major/language requirements?', content: "Our program is mainly aimed at students, outstanding high school and college students are welcome to apply. There are no professional restrictions, but it does require you to have a mindset that is willing to explore and learn about different areas. With the exception of a few guest speakers and coffee chats, which will be in English (don't worry, there will be translations, of course, you can use this opportunity to practice your English academic communication), most of them will be in Chinese." },
        { title: 'What do I get?', content: "Over the course of three days, you will be led by a prestigious (US Top20/ UK G5/ China C9) teaching assistant and like-minded friends from different fields and backgrounds to propose, complete and present an innovative project based on UN 17 goals. Outstanding projects will be funded for further development. You will have the opportunity to meet and Coffee Chat with popular industry leaders. You will have an unforgettable friendship and unique summer memories:)" },
        { title: 'How long will it take to receive a notification after filling out the application?', content: "The early bird wheel will be notified within 2-3 weeks. The result may be: Admission (Welcome to MEGA! Reply within 10 days + deposit)/Standby (if a standby is confirmed, it will be automatically notified when a space becomes available)/declined" },
        { title: 'Can I participate if I have no project foundation/no idea?', content: "Yes - our programs are designed to foster innovative thinking and the ability to collaborate across fields. We will provide you with a range of training and resources to help you understand the project process and stimulate your creativity and ideas. In addition, you will have the opportunity to collaborate with other participants to explore and complete a meaningful and innovative project." },
        { title: 'Is there a specific schedule?', content: "Stay tuned for more tweets - be sure to follow the MEGA account!" },
        { title: 'Can I participate as a teaching assistant/guest?', content: "Welcome to send your resume to megachinaoffical@gmail.com, we will get back to you within a week! Look forward to your joining." },

    ]

    const cardData = [
        {
            imageUrl: '/vector4.svg',
            title: 'Who are we?',
            text: "In 2019, a group of innovators from the world's top universities in the United States at Princeton founded MEGA: areas including but not limited to, technology, engineering, design, art, business, social and natural sciences.",
        },
        {
            imageUrl: '/Vector.png',
            title: 'What do we do?',
            text: "MEGA aims to encourage and assist outstanding young people to explore their potential, explore diverse cognition, and develop valuable and influential project products that are oriented towards solving real problems through their own abilities and with the support of MEGA.",
        },
        {
            imageUrl: '/union.svg',
            title: 'What do we do?',
            text: "MEGA has set up implementation sites around the world and is supported by more than 30 businesses, technology companies and ngos. Members innovate and collaborate in areas such as the environment, education and healthcare to provide viable solutions, and have received financial support and internship opportunities.",
        },
    ];

    // Your expandableWithColumns array
    const expandableWithColumns = [
        [ExpandableData[0], ExpandableData[1]],
        [ExpandableData[2], ExpandableData[3]],
        [ExpandableData[4], ExpandableData[5]],
    ];

    // Rearrange the rectangles to match the desired layout
    const rectanglesWithColumns = [
        rectanglesData.slice(0, 2),
        rectanglesData.slice(2, 4),
        rectanglesData.slice(4),
    ];

    return (
        <div className={Styles.pageContainer}>
            {/* Dashed Border Rows Container */}
            <div className={Styles.dashedBorderContainer}>
                <div className={Styles.rowsContainer}>
                    {/* Render four rows */}
                    {Array.from({ length: 4 }, (_, rowIndex) => (
                        <div key={rowIndex} className={Styles.dashedBorderRow}>
                            {rowData.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className={`${Styles.item} ${itemIndex === rowIndex ? Styles.underline : ''}`}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Rectangles Container */}
            <div className={Styles.rectanglesContainer}>
                {/* Render rectangles with columns */}
                {rectanglesWithColumns.map((columnRectangles, columnIndex) => (
                    <div key={columnIndex} className={Styles.rectangleColumn}>
                        {columnRectangles.map((rectangle, rectangleIndex) => (
                            <React.Fragment key={rectangle.id}>
                                <div
                                    className={Styles.rectangle}
                                    style={{ backgroundColor: rectangle.color }}
                                />
                                <div className={Styles.text}>
                                    {rectangle.color}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
            <div className={Styles.expandableDivContainer}>
                {/* Render the ExpandableDiv components dynamically in rows and columns */}
                {ExpandableData.map((data, index) => (
                    <ExpandableDiv className={Styles.expandableDivColumn} key={index} title={data.title} text={data.content} />
                ))}
            </div>
            <div className={Styles.cardDivContainer}>
                {/* Use a loop to render the cards */}
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>
        </div>
    );
}

export default Resources;
