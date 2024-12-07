import React from 'react'
import './About.css'
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function About() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    return (
        <div className='about'>
            <div className="container">
                <div className="about-header">
                    <p>university area</p>
                    <h4>case and portfolio</h4>
                    <h5>case and portfolio</h5>
                    <div className="about-left-header">

                        <img className='about-blue-header' src="./imgs/about/Rectangle 1263.png" alt="" />
                        <h1>History about university
                        </h1>
                        <img src="./imgs/about/Rectangle 1264.png" alt="" className="shape-about-h" />
                        <img src="./imgs/about/Amster 1.png" alt="" className="img-aboutH" />
                    </div>
                    <div className="about-right-header">
                        <img src="./imgs/about/Group 5425.png" alt="" />
                        <h1>Tales about  adventure dream</h1>
                    </div>
                </div>
                <section className="university-dormitory">
                    <div className="UD-left-box">
                        <div className="UD-left-middleBox about-top-box">
                            <img src="./imgs/about/Rectangle (5).png" alt="" />
                            <li>photo #682</li>
                            <h1>my home - my world </h1>
                            <h1>2019</h1>
                            <p>sold for 26,000$</p>
                        </div>
                        <div className="UD-left-topBox about-left-topBox">
                            <ul className='about-dormitory-years'>
                                <li>2017</li>
                                <li>2017</li>
                                <span>2019</span>
                                <li>2020</li>
                            </ul>
                            <img className='about-dor-img' src="./imgs/about/Rectangle (6).png" alt="" />
                        </div>

                        <div className="UD-left-bottomBox">
                            <h1>Amsterdam - a city in which students study art</h1>
                            <p>Every student has the right to free visits to all the museums of the city. Sounds good</p>
                            <a href="/">show more</a>
                        </div>
                    </div>
                    <div className="UD-right-box">
                        <img src="./imgs/about/Group 5429.png" alt="" />
                        <ul>
                            <li>
                                How many students have made careers after us?</li>
                            <li>Who says you’re the best university? Where did you get so many awards?</li>
                            <li>Why the IT? Which is procents own students will works in IT? </li>
                        </ul>
                    </div>
                </section>
                <div className="about-art">
                    <div className="about-art-topBox">
                        <img className='aRTbox-img-top' src="./imgs/about/Rectangle (5).png" alt="" />
                        <img className='aRTbox-img-top2' src="./imgs/about/about-art1.png" alt="" />
                    </div>
                    <div className="about-art-topBox">
                        <div className="about-art-left">
                            <h1>Art is everything and in everybody</h1>
                            <p>In 2010, at the opening of the university in Kiev, a guy asked me what I would become after university. And when I found out that he couldn’t pay for his studies with us, I paid for it. Now this guy’s got a bunch of our students at his job. Yes, his name is Allert Nievor, and he’s a multi-billionaire. Good reason to think</p>
                        </div>
                        <div className="about-art-right">
                            <img src="./imgs/about/Dreaa 1.png" alt="" />
                            <h1>AMST</h1>
                        </div>
                    </div>
                </div>
                <section className="pagination-about">
                    <Pagination
                        page={page}
                        count={10}
                        renderItem={(item) => (
                            <PaginationItem
                                component={Link}
                                to={`/`}
                                {...item}
                            />
                        )}
                    />
                </section>
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

export default About