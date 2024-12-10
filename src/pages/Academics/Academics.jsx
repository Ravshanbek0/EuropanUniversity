import React from 'react'
import './Academics.css'
import { Link } from 'react-router-dom'

function Academics() {
    return (
        <div className='container'>
            <div className="academics">
                <div className="header">
                    <div className="header-left aHeader-left">
                        <img className='a-header-red' src="./imgs/Rectangle 20.png" alt="" />

                        <h1>Art is a future
                            for future  </h1>
                        <h5>University of Arts  is it place, for everyone creative  the lights of our world  </h5>
                    </div>
                    <div className="header-right">
                        <img className='a-header-hero' src="./imgs/academics/academics.png" alt="" />
                    </div>
                </div>
                <section className="a-evc">
                    <div className="evc-nav">
                        <li>education</li>
                        <li>value</li>
                        <li>contributors</li>
                    </div>
                    <div className="evc-hover-boxses">
                        <div className="evc-hover-boxs">
                            <div className="evc-hover-boxs"></div>
                           
                        </div>
                        <div className="icons-services evc-IS">
                            <Link to={'/design'}>
                                <div className="serv-boxIcon evc-IS-box">
                                    <img src="./imgs/blue-icon.png" alt="" />
                                    <h1>Design</h1>
                                </div>
                            </Link>
                            <Link to={"/history"}>
                                <div className="serv-boxIcon evc-IS-box">
                                    <img src="./imgs/red-icon.png" alt="" />
                                    <h1>History</h1>
                                </div>
                            </Link>
                            <Link to={'/art'}>
                                <div className="serv-boxIcon evc-IS-box">
                                    <img src="./imgs/green-icon.png" alt="" />
                                    <h1>Art</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="university-dormitory">
                    <div className="UD-left-box">
                        <div className="UD-left-topBox">
                            <ul>
                                <h1>university </h1>
                                <h2>dormitory</h2>
                                <h3>contributors</h3>
                            </ul>
                            <img src="./imgs/academics/Ud-1.png" alt="" />
                        </div>
                        <div className="UD-left-middleBox">
                            <img src="./imgs/academics/Ud-2.png" alt="" />
                            <li>photo #132</li>
                            <h1>election of the new university president </h1>
                            <h1>2017</h1>
                            <p>sold for 148,000$</p>
                        </div>
                        <div className="UD-left-bottomBox">
                            <h1>Pictures of the university in the store</h1>
                            <p>Our students take pictures at the university and sell them in photo banks. That’s why over $15 million of fish were donated to charities</p>
                            <a href="/">show more</a>
                        </div>
                    </div>
                    <div className="UD-right-box">
                        <img src="./imgs/academics/Ud-3.png" alt="" />
                        <ul>
                            <li>
                                How many students have made careers after us?</li>
                            <li>Who says you’re the best university? Where did you get so many awards?</li>
                            <li>Why the IT? Which is procents own students will works in IT? </li>
                        </ul>
                    </div>
                </section>
                <section className="educational-discipline">
                    <div className="ED-box">
                        <img src="./imgs/academics/educational-discipline.png" alt="" />
                        <div className="ed-box"></div>
                        <div className="ED-nav-bot">
                            <ul>
                                <li>art
                                    <span className='ed-span'></span>
                                </li>
                                <li className='active'>design
                                    <span className='ed-span'></span>

                                </li>
                                <li>history
                                    <span className='ed-span'></span>

                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="academics-men">
                    <div className="academics-men-box">
                        <img src="./imgs/academics/AdamCrowley.png" alt="" />
                        <h1>Albert Jacobs</h1>
                        <p>head of department
                        </p>
                    </div>
                    <div className="academics-men-box">
                        <img src="./imgs/academics/Magrit Stiffel.png" alt="" />
                        <h1>Albert Jacobs</h1>
                        <p>head of department
                        </p>
                    </div>
                    <div className="academics-men-box">
                        <img src="./imgs/academics/Kris Rollins.png" alt="" />
                        <h1>Albert Jacobs</h1>
                        <p>head of department
                        </p>
                    </div>
                    <div className="academics-men-box">
                        <img src="./imgs/academics/India Blake.png" alt="" />
                        <h1>Albert Jacobs</h1>
                        <p>head of department
                        </p>
                    </div>
                    <div className="academics-men-box">
                        <img src="./imgs/academics/Ajani Kimathi.png" alt="" />
                        <h1>Albert Jacobs</h1>
                        <p>head of department
                        </p>
                    </div>

                </section>
                <div className="conatact">
                    <div className="contact-left">
                        <h1>Lets study together</h1>
                        <p>Apply for consideration  your resume, we’ll give you feedback. Note: the time of application is unlimited, if you are invited to the training you can study at any time</p>
                        <img src="./imgs/contact.png" alt="" />
                    </div>
                    <div className="contact-right">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <textarea name="" id="" placeholder='Type your massage hear'></textarea>
                        <button id='contact-btn'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Academics