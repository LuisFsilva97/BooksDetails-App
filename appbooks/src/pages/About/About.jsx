import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>BookHub is a platform designed for book enthusiasts seeking a comprehensive online experience. Our mission is to connect readers with their favorite books, authors, and communities while fostering a vibrant literary culture. With a vast collection of titles spanning various genres, from classics to contemporary works, BookHub provides a virtual haven for bibliophiles worldwide.</p>
            <p className='fs-17'>Through intuitive browsing features, personalized recommendations, and engaging discussions, BookHub aims to inspire readers to explore new literary horizons and connect with like-minded individuals who share their passion for books. Whether you're seeking a gripping mystery, an enlightening non-fiction read, or an immersive fantasy adventure, BookHub offers something for every reader, empowering them to embark on unforgettable literary journeys.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
