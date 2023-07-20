import React from 'react';
import Styles from './Resources.module.css'; // Import your CSS module here
import ExpandableDiv from './ExpandableDiv'; // Import the ExpandableDiv component here

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

    const expandableWithColumns = [
        ExpandableData.slice(0, 2),
        ExpandableData.slice(2, 4),
        ExpandableData.slice(4, 6),

    ]

    // Calculate the total height based on the number of rectangles and the height of each row
    const totalHeight = Math.ceil(rectanglesData.length / 2) * 48; // 48px is the height between each row

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
                {/* Render the ExpandableDiv components dynamically in columns */}
                {expandableWithColumns.map((columnData, columnIndex) => (
                    <div key={columnIndex} className={Styles.expandableDivColumn}>
                        {columnData.map((data, dataIndex) => (
                            <ExpandableDiv key={dataIndex} title={data.title} text={data.content} />
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Resources;
