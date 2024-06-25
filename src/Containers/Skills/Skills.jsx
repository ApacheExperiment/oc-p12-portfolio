import React from 'react';
import './Skills.scss';
import htmlLogo from "../../assets/img/icon/Initial/Icon-Html.webp";
import htmlLogoReverse from "../../assets/img/icon/Reverse/Icon-Html-Reverse.webp";
import cssLogo from "../../assets/img/icon/Initial/Icon-Css.webp";
import cssLogoReverse from "../../assets/img/icon/Reverse/icon-Css-Reverse.webp";
import sassLogo from "../../assets/img/icon/Initial/icon-Sass.webp";
import sassLogoReverse from "../../assets/img/icon/Reverse/icon-Sass-Reverse.webp";
import jsLogo from "../../assets/img/icon/Initial/Icon-Js.webp";
import jsLogoReverse from "../../assets/img/icon/Reverse/icon-JS-Reverse.webp";
import reactLogo from "../../assets/img/icon/Initial/icon-React.webp";
import reactLogoReverse from "../../assets/img/icon/Reverse/icon-React-Reverse.webp";
import reduxLogo from "../../assets/img/icon/Initial/icon-Redux.webp";
import reduxLogoReverse from "../../assets/img/icon/Reverse/Icon-Redux-Reverse.webp";
import figmaLogo from "../../assets/img/icon/Initial/icon-figma.webp";
import figmaLogoReverse from "../../assets/img/icon/Reverse/icon-Figma-Reverse.webp";
import indesignLogo from "../../assets/img/icon/Initial/icon-ID.webp";
import indesignLogoReverse from "../../assets/img/icon/Reverse/icon-ID-Reverse.webp";
import photoshopLogo from "../../assets/img/icon/Initial/Icon-PS.webp";
import photoshopLogoReverse from "../../assets/img/icon/Reverse/Icon-PS-Reverse.webp";
import typescriptLogo from "../../assets/img/icon/Initial/icon-TS.webp";
import typescriptLogoReverse from "../../assets/img/icon/Reverse/icon-TS-Reverse.webp";
import nextLogo from "../../assets/img/icon/Initial/icon-Next.webp";
import nextLogoReverse from "../../assets/img/icon/Reverse/icon-Next-Reverse.webp";
import mdxLogo from "../../assets/img/icon/Initial/icon-mdx.webp";
import mdxLogoReverse from "../../assets/img/icon/Reverse/icon-mdx-Reverse.webp";
import pocketbase from "../../assets/img/icon/Initial/icon-Pocketbase.webp";
import pocketbaseReverse from "../../assets/img/icon/Reverse/icon-Pocketbase-Reverse.webp"


export default function Skills() {
    return (
        <section id="skills" className="skills">
            <h2 className="titleSkills">Compétences</h2>
            <p className="pSkills">
                Mon point d'encrage étant la partie visuelle et l'expérience utilisateur, je cherche néanmoins à comprendre et à apprendre la gestion de données et tout ce qui constitue le développement back-end.<br />
            </p>
            <div className="langagesSkills">
                <div className="border">
                    <div className="containerSkills">
                        <h3 className="subtitleSkills">Langages de développement</h3>
                        <div className="containerIcons">
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={htmlLogo} 
                                        alt="Html logo"
                                        width={50}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={htmlLogoReverse} 
                                        alt="Html logo"
                                        width={50}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">Html</p>
                            </div>
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={cssLogo} 
                                        alt="Css logo"
                                        width={50}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={cssLogoReverse} 
                                        alt="Css logo"
                                        width={50}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">CSS</p>
                            </div>
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={sassLogo} 
                                        alt="Sass logo"
                                        width={52}
                                        height={52}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={sassLogoReverse} 
                                        alt="Sass logo"
                                        width={52}
                                        height={52}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">Scss</p>
                            </div>
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={jsLogo} 
                                        alt="JS logo"
                                        width={50}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={jsLogoReverse} 
                                        alt="JS logo"
                                        width={50}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border">
                    <div className="containerSkills">
                        <h3 className="subtitleSkills">Frameworks et librairies</h3>
                        <div className="containerIcons">
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={reactLogo}  
                                        alt="React logo"
                                        width={55}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={reactLogoReverse} 
                                        alt="React logo"
                                        width={55}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">React</p>
                            </div>
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={reduxLogo}  
                                        alt="Redux logo"
                                        width={55}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={reduxLogoReverse}
                                        alt="Redux logo"
                                        width={55}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">Redux</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border">
                    <div className="containerSkills">
                        <h3 className="subtitleSkills">Outils Visuel</h3>
                        <div className="containerIcons">
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={figmaLogo}  
                                        alt="Figma logo"
                                        width={35}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={figmaLogoReverse}
                                        alt="Figma logo"
                                        width={35}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">Figma</p>
                            </div>
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={indesignLogo}  
                                        alt="Indesign logo"
                                        width={50}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={indesignLogoReverse} 
                                        alt="Indesign logo"
                                        width={50}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">Indesign</p>
                            </div>
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={photoshopLogo}  
                                        alt="Photoshop logo"
                                        width={50}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={photoshopLogoReverse}
                                        alt="Photoshop logo"
                                        width={50}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">Photoshop</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border">
                    <div className="containerSkills">
                        <h3 className="subtitleSkills">En cours d'apprentissage</h3>
                        <div className="containerIcons">
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={typescriptLogo}  
                                        alt="TypeScript logo"
                                        width={50}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={typescriptLogoReverse} 
                                        alt="TypeScript logo"
                                        width={50}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">TypeScript</p>
                            </div>
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={nextLogo}  
                                        alt="Next JS logo"
                                        width={50}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={nextLogoReverse} 
                                        alt="Next JS logo"
                                        width={50}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">Next</p>
                            </div>
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={mdxLogo}  
                                        alt="MDX logo"
                                        width={50}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={mdxLogoReverse} 
                                        alt="MDX logo"
                                        width={50}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">MDX</p>
                            </div>
                            <div className="iconAndP">
                                <div className="iconWrapper">
                                    <img 
                                        src={pocketbase}  
                                        alt="pocketbase logo"
                                        width={50}
                                        height={50}
                                        className="iconInitial icon"
                                    />
                                    <img 
                                        src={pocketbaseReverse} 
                                        alt="pocketbase logo"
                                        width={50}
                                        height={50}
                                        className="iconReverse icon"
                                    />
                                </div>
                                <p className="iconP">Pocketbase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
