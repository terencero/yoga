import * as React from 'react';
import  Background  from '../../public/images/background.jpg';


let parallaxStyle = {
    width: '100%',
    heigth: '400px',
    backgroundImage: 'url(${Background})'
}

class About extends React.Component {
    render() {
        return (
            <div className="about-section">

                <img src="./images/mainPic.png" alt="Profile Picture" />
                <div className="parallax" style={parallaxStyle}></div>
                <h2>About Jiwoo</h2>
                <div className="profile">
                    <p>
                        I was born & raised in Korea till I was about 16 years old. Throughout my teenage years I remember contemplating and searching for the true meaning & purpose of life and longing for the freedom to see the world and choose the life I wanted to live. I was always searching for something that I didn't even know existed.</p>

                    <p>I got lucky and sent to New Zealand to study then to England. Ever since then I have had the privilege of traveling around the world meeting friends from other cultures, experiencing & exploring life. Although I had fun and all, there was always a feeling of void & emptiness that I couldn't fill no matter what I was doing or where I was.</p>

                    <p>My first yoga experience was during my college years in London, I immediately fell in love with asanas and started collecting books and dvds on yoga. Unable to afford classes at yoga studios, I often practiced at home contorting my body into interesting shapes. I went on like this for about 10 years without knowing what yoga really was.</p>

                    <p>In the midst of chaotic life as a new mom of two children, I discovered Ashtanga Vinyasa yoga and its welcoming community. I felt a sense of coming home with this practice since everywhere I went everybody was speaking the same language that is yoga.
After discovering the rest of the limbs of yoga beyond asanas, I delved deeply into yoga philosophy & history and realized that the more I studied the more there was to learn.</p>

                    <p>Yoga is a practice of compassionate discipline, being present & awakening energy through conscious breathing, meditation as well as performing asanas.</p>

                    <p>It is interrelated practices that connect and align us and bring stability in our bodies as well as in our lives.  The practice of yoga is to unite all the parts of our body, mind and spirit in order to live our lives more peacefully & compassionately.</p>

                    <p>My passion and love for yoga continues to propel me deeper into self-study and daily practice to this day and hopefully through the rest of my life. I'm dedicated to my practice and to live a life with more awakened energy & awareness.  I hope my dedication will inspire others to do the same.</p>
                </div>
            </div>
        );
    }
}

export { About };