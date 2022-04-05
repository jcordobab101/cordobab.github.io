import Emoji from "./Emoji.js";
import './greetings.css';


const DateTime = () => {
    let greet;
    const userName = 'Joshua'
    const userLastName = 'Cordoba'
    const myDate = new Date();
    const hrs = myDate.getHours();

    if (hrs < 12) {
        greet = 'Good morning ☕️';

    } else if (hrs >= 12 && hrs <= 17) {
        greet = 'Good afternoon ☀︎ ';

    }else if (hrs >= 17 && hrs <= 24) {
        greet = 'Good evening 🌙';
    }
    return `${greet} ${userName}.`
    

}

DateTime();

export default DateTime;