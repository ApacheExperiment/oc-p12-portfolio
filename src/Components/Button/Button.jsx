import  "./Button.scss";
import { useTranslation } from 'react-i18next';

export default function Button() {
    const { t } = useTranslation();
    return (
        <button onClick={() => window.location.href = '#contact'} className="buttonContact" >
            {t('contactMe')}
        </button>
    );
}