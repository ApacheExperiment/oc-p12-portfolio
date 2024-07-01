import React from 'react';

const SkillItem = ({ initialLogo, reverseLogo, altText, skillName, initialWidth, initialHeight, reverseWidth, reverseHeight }) => (
    <div className="iconAndP">
        <div className="iconWrapper">
            <img 
                src={initialLogo} 
                alt={`${altText} logo`}
                width={initialWidth}
                height={initialHeight}
                className="iconInitial icon"
            />
            <img 
                src={reverseLogo} 
                alt={`${altText} logo reverse`}
                width={reverseWidth}
                height={reverseHeight}
                className="iconReverse icon"
            />
        </div>
        <p className="iconP">{skillName}</p>
    </div>
);

export default SkillItem;

