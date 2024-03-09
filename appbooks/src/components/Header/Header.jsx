import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Discover your next read effortlessly with BookHub. Our intuitive search tools and personalized recommendations make finding your perfect book a breeze. From gripping thrillers to heartwarming romances, explore our curated collection and find the book that speaks to you. Let BookHub guide you to your next literary adventure.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header