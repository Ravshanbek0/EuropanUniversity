import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='container'>
      <div className="home">
        <div className="header">
          <div className="header-left">
            <p>2022 | About us</p>
            <h1>Visual history</h1>
            <h5>The Greatest temple of art that creates the future of Aesign and Art</h5>
            <a href="/">more</a>
          </div>
          <div className="header-right">
            <img className='header-hero' src="./imgs/header-hero.png" alt="" />
            <img className='header-red' src="./imgs/Rectangle 20.png" alt="" />
            <img className='header-green' src="./imgs/Rectangle 24.png" alt="" />
          </div>
        </div>
        <div className="icons-services">
          <div className="serv-boxIcon">
            <img src="./imgs/blue-icon.png" alt="" />
            <h1>Design</h1>
            <p>The Faculty of Design offers modern teaching technologies in IT and applied fields</p>
          </div>
          <div className="serv-boxIcon">
            <img src="./imgs/red-icon.png" alt="" />
            <h1>History</h1>
            <p>The Faculty of Design offers modern teaching technologies in IT and applied fields</p>
          </div>
          <div className="serv-boxIcon">
            <img src="./imgs/green-icon.png" alt="" />
            <h1>Art</h1>
            <p>The Faculty of Design offers modern teaching technologies in IT and applied fields</p>
          </div>
        </div>
        <h1 className="art-h1">
          Art news
        </h1>
        <section className="art-news">
          <div className="art-box">
            <div className="art-box-img">
              <img src="./imgs/art6.png" alt="" />
            </div>
            <h1>Poligraphy 2023, The best style...</h1>
            <div className="text-p-art">
              <p className='art-design'>Design</p>
              <p className='art-art'>Art</p>
            </div>
          </div>
          <div className="art-box">
            <div className="art-box-img">
              <img src="./imgs/art5.png" alt="" />

            </div>
            <h1>Poligraphy 2023, The best style...</h1>
            <div className="text-p-art">
              <p className='art-design'>Design</p>
              <p className='art-art'>Art</p>
            </div>
          </div>
          <div className="art-box">
            <div className="art-box-img">
              <img src="./imgs/art4.png" alt="" />

            </div>
            <h1>Poligraphy 2023, The best style...</h1>
            <div className="text-p-art">
              <p className='art-design'>Design</p>
              <p className='art-art'>Art</p>
            </div>
          </div>
          <div className="art-box">
            <div className="art-box-img">
              <img src="./imgs/art3.png" alt="" />

            </div>
            <h1>Poligraphy 2023, The best style...</h1>
            <div className="text-p-art">
              <p className='art-design'>Design</p>
              <p className='art-art'>Art</p>
            </div>
          </div>
          <div className="art-box">
            <div className="art-box-img">
              <img src="./imgs/art2.png" alt="" />

            </div>
            <h1>Poligraphy 2023, The best style...</h1>
            <div className="text-p-art">
              <p className='art-design'>Design</p>
              <p className='art-art'>Art</p>
            </div>
          </div>
          <div className="art-box">
            <div className="art-box-img">
              <img src="./imgs/art1.png" alt="" />

            </div>
            <h1>Poligraphy 2023, The best style...</h1>
            <div className="text-p-art">
              <p className='art-design'>Design</p>
              <p className='art-art'>Art</p>
            </div>
          </div>
        </section>
        <div className="conatact">
          <div className="contact-left">
            <h1>Lets study together</h1>
            <p>Apply for consideration  your resume, we’ll give you feedback. Note: the time of application is unlimited, if you are invited to the training you can study at any time</p>
            <img src="./imgs/contact.png" alt="" />
          </div>
          <div className="contact-right">
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Email' />
            <textarea name="" id="" placeholder='Type your massage hear'></textarea>
            <button id='contact-btn'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home