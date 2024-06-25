import  "./Button.scss";

export default function Button() {
    return (
        <button onClick={() => window.location.href = '#contact'} className="buttonContact" >
            Contactez moi
        </button>
    );
}