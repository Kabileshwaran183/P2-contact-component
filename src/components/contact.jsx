
import phone from '../assets/phone-icon.png'
import mail from '../assets/mail-icon.png'
export default function Contact(props){
    return(
        <article className='contact-card'>
            <img src={props.img} alt="catimg"></img>
            <h1>{props.name}</h1>
            <div className='info-group'>
                <img className = " phone-icon"src={phone}></img>
                <p>{props.phone}</p>
            </div>
            <div className='info-group'>
                <img className="mail-icon"src={mail}></img>
                <p>{props.mail}</p>
            </div>
        </article>
    )
}