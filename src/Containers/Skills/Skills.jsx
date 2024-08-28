import React from 'react';
import './Skills.scss';
import SkillGroup from './SkillGroup';
import { useTranslation } from 'react-i18next';
import imagePaths from './imagePaths';


const skillsData = {
    developmentLanguages: [
        { initialLogo: imagePaths.html.initial, reverseLogo: imagePaths.html.reverse, altText: 'Html', skillName: 'Html', initialWidth: 50, initialHeight: 50, reverseWidth: 50, reverseHeight: 50 },
        { initialLogo: imagePaths.css.initial, reverseLogo: imagePaths.css.reverse, altText: 'Css', skillName: 'CSS', initialWidth: 50, initialHeight: 50, reverseWidth: 50, reverseHeight: 50 },
        { initialLogo: imagePaths.sass.initial, reverseLogo: imagePaths.sass.reverse, altText: 'Sass', skillName: 'Scss', initialWidth: 52, initialHeight: 52, reverseWidth: 52, reverseHeight: 52 },
        { initialLogo: imagePaths.js.initial, reverseLogo: imagePaths.js.reverse, altText: 'JavaScript', skillName: 'JavaScript', initialWidth: 50, initialHeight: 50, reverseWidth: 50, reverseHeight: 50 },
    ],
    frameworksAndLibraries: [
        { initialLogo: imagePaths.react.initial, reverseLogo: imagePaths.react.reverse, altText: 'React', skillName: 'React', initialWidth: 55, initialHeight: 50, reverseWidth: 55, reverseHeight: 50 },
        { initialLogo: imagePaths.redux.initial, reverseLogo: imagePaths.redux.reverse, altText: 'Redux', skillName: 'Redux', initialWidth: 55, initialHeight: 50, reverseWidth: 55, reverseHeight: 50 },
    ],
    dataBase: [
        { initialLogo: imagePaths.pocketbase.initial, reverseLogo: imagePaths.pocketbase.reverse, altText: 'Pocketbase', skillName: 'Pocketbase', initialWidth: 50, initialHeight: 50, reverseWidth: 50, reverseHeight: 50 },
    ],
    visualTools: [
        { initialLogo: imagePaths.figma.initial, reverseLogo: imagePaths.figma.reverse, altText: 'Figma', skillName: 'Figma', initialWidth: 35, initialHeight: 50, reverseWidth: 35, reverseHeight: 50 },
        { initialLogo: imagePaths.indesign.initial, reverseLogo: imagePaths.indesign.reverse, altText: 'Indesign', skillName: 'Indesign', initialWidth: 50, initialHeight: 50, reverseWidth: 50, reverseHeight: 50 },
        { initialLogo: imagePaths.photoshop.initial, reverseLogo: imagePaths.photoshop.reverse, altText: 'Photoshop', skillName: 'Photoshop', initialWidth: 50, initialHeight: 50, reverseWidth: 50, reverseHeight: 50 },
    ],
    currentlyLearning: [
        { initialLogo: imagePaths.typescript.initial, reverseLogo: imagePaths.typescript.reverse, altText: 'TypeScript', skillName: 'TypeScript', initialWidth: 50, initialHeight: 50, reverseWidth: 50, reverseHeight: 50 },
        { initialLogo: imagePaths.next.initial, reverseLogo: imagePaths.next.reverse, altText: 'Next', skillName: 'Next', initialWidth: 50, initialHeight: 50, reverseWidth: 50, reverseHeight: 50 },
        { initialLogo: imagePaths.mdx.initial, reverseLogo: imagePaths.mdx.reverse, altText: 'MDX', skillName: 'MDX', initialWidth: 50, initialHeight: 50, reverseWidth: 50, reverseHeight: 50 },
        { initialLogo: imagePaths.java.initial, reverseLogo: imagePaths.java.reverse, altText: 'Java', skillName: 'Java', initialWidth: 49, initialHeight: 56, reverseWidth: 49, reverseHeight: 56 },
    ],
};

export default function Skills() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="skills">
            <h2 className="titleSkills">{t('titleSkills')}</h2>
            <p className="pSkills">{t('pSkills')}</p>
            <div className="langagesSkills">
                <SkillGroup title={t('developmentLanguages')} skills={skillsData.developmentLanguages} />
                <SkillGroup title={t('frameworksAndLibraries')} skills={skillsData.frameworksAndLibraries} />
                <SkillGroup title={t('dataBase')} skills={skillsData.dataBase} />
                <SkillGroup title={t('visualTools')} skills={skillsData.visualTools} />
                <SkillGroup title={t('currentlyLearning')} skills={skillsData.currentlyLearning} />
            </div>
        </section>
    );
}