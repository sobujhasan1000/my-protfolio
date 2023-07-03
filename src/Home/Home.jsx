import React from 'react';
import Nav from '../Component/Navebar/Nav';
import Aboutme from '../Component/AboutMe/Aboutme';
import MySkills from '../Component/Myskil/MySkills';
import Project from '../Component/MyProjects/Project';
import ContractMe from '../Component/Contact/ContractMe';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Aboutme></Aboutme>
            <MySkills></MySkills>
            <Project></Project>
            <ContractMe></ContractMe>
        </div>
    );
};

export default Home;