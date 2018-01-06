import * as React from 'react';


class About extends React.Component {
  render() {
    return (
      <div className="about-section">
        <section className="section">
          <section className="hero">
            {/* <figure className="image is-384x480">
              {<img src="./images/IMG_0215copy.jpg" alt="Profile Picture" id="profile-pic" />}
              </figure> */}
            <div className="hero-body">
              <div className="container">
                <h1 className="title">About Jiwoo</h1>
              </div>
            </div>
          </section>
          <div className="container is-fullhd">
            <div className="tile is-ancestor">
              <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child">
                  <figure className="image is-384x480">
                    {<img src="./images/IMG_0215copy.jpg" alt="Profile Picture" id="profile-pic" />}
                  </figure>
                </div>
                <div className="tile is-child">
                  <figure className="image is-1242x2208">
                    {<img src="./images/IMG_0228.jpg" alt="Profile Picture" id="profile-pic" />}
                  </figure>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box profile">
                  <p>I was born &amp; raised in Korea till I was about 16 years old. Throughout my teenage years I remember contemplating and searching for the true meaning &amp; purpose of life and longing for the freedom to see the world and choose the life I wanted to live. I was always searching for something that I didn't even know existed.
                    <br />
                    <br />
                    I got lucky and sent to New Zealand to study then to England. Ever since then I have had the privilege of traveling around the world meeting friends from other cultures, experiencing &amp; exploring life. Although I had fun and all, there was always a feeling of void &amp; emptiness that I couldn't fill no matter what I was doing or where I was.
                    <br />
                    <br />
                    My first yoga experience was during my college years in London, I immediately fell in love with asanas and started collecting books and dvds on yoga. Unable to afford classes at yoga studios, I often practiced at home contorting my body into interesting shapes. I went on like this for about 10 years without knowing what yoga really was.
                    <br />
                    <br />
                    In the midst of chaotic life as a new mom of two children, I discovered Ashtanga Vinyasa yoga and its welcoming community. I felt a sense of coming home with this practice since everywhere I went everybody was speaking the same language that is yoga. After discovering the rest of the limbs of yoga beyond asanas, I delved deeply into yoga philosophy &amp; history and realized that the more I studied the more there was to learn.
                    <br />
                    <br />
                    Yoga is a practice of compassionate discipline, being present &amp; awakening energy through conscious breathing, meditation as well as performing asanas.
                    <br />
                    <br />
                    It is interrelated practices that connect and align us and bring stability in our bodies as well as in our lives.  The practice of yoga is to unite all the parts of our body, mind and spirit in order to live our lives more peacefully &amp; compassionately.
                    <br />
                    <br />
                    My passion and love for yoga continues to propel me deeper into self-study and daily practice to this day and hopefully through the rest of my life. I'm dedicated to my practice and to live a life with more awakened energy &amp; awareness.  I hope my dedication will inspire others to do the same.</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export { About };