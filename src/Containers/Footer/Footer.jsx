import "./Footer.scss"
import reactLogo from "../../assets/img/icon/Reverse/icon-React-Reverse.webp";
import PBLogo from "../../assets/img/icon/Reverse/icon-Pocketbase-Reverse.webp";
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className='footer'>
            <p className='credits'>{t('developedWith')} <img src={reactLogo} 
              alt="react logo"
              width={20}
              height={20} className='reactI'/> et <img src={PBLogo} 
              alt="logo pocketbase"
              width={50}
              height={20} className='pocketbase'/></p>
        </footer>
    )
}