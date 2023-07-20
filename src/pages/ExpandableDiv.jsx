import React, { useState } from 'react';
import Styles from './ExpandableDiv.module.css'; // Import your CSS module here

function ExpandableDiv({ title, text }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    };

    return (
        <div className={Styles.expandableDiv} onClick={handleToggleExpand}>
            <div className={Styles.title}>
                {title}
                <span className={isExpanded ? Styles.arrowUp : Styles.arrowDown}></span>
            </div>
            {isExpanded && <div className={Styles.content}>{text}</div>}
        </div>
    );
}

export default ExpandableDiv;
