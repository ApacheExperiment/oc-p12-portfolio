import React from 'react';
import SkillItem from './SkillItem';

const SkillGroup = ({ title, skills }) => (
    <div className="border">
        <div className="containerSkills">
            <h3 className="subtitleSkills">{title}</h3>
            <div className="containerIcons">
                {skills.map((skill, index) => (
                    <SkillItem
                        key={index}
                        initialLogo={skill.initialLogo}
                        reverseLogo={skill.reverseLogo}
                        altText={skill.altText}
                        skillName={skill.skillName}
                        initialWidth={skill.initialWidth}
                        initialHeight={skill.initialHeight}
                        reverseWidth={skill.reverseWidth}
                        reverseHeight={skill.reverseHeight}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default SkillGroup;
