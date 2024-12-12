import cat1 from '../assets/cat1.jpeg'
import cat2 from '../assets/cat2.jpeg'
import cat3 from '../assets/cat3.jpeg'
import cat4 from '../assets/cat4.jpeg'
import phone from '../assets/phone-icon.png'
import mail from '../assets/mail-icon.png'
export default function Contact(){
    return(
        <article className='contact-card'>
            <img src={cat1}></img>
            <h1>This is Cat1</h1>
            <div>
                <img className = " phone-icon"src={phone}></img>
                <p>1234567890</p>
            </div>
            <div>
                <img className="mail-icon"src={mail}></img>
                <p>sample@gmail.com</p>
            </div>
        </article>
    )
}