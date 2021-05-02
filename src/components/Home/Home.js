import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skils from '../Skils/Skils';
import Resume from '../Resume/Resume'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Skils></Skils>
            <Projects></Projects>
            <Resume></Resume>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;