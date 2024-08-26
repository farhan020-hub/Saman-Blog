import React from 'react';
import imgadan from '../../assests/imgadan.jpg';
import './about.css';

function About() {
  return (
    <div className="about-container ">
      <h1>About Me</h1><br />
      <div className="about-content">
        <div className="bio-section">
          <h2>My Journey in Education</h2><br />
          <p>
            With over <b>25 years of experience in the education sector</b>, I am a seasoned Curriculum Specialist. 
            Currently, I am contributing my expertise to Adam Smith International as a <b>Curriculum Expert</b> on the 
            Somalia Education Systems Strengthening Programme (SESSP). My journey has seen me taking on roles 
            such as a member of the National Taskforce for the implementation of the competency-based curriculum 
            in Kenya, Technical Advisor for the Kenya Essential Education Programme, and Curriculum Development 
            Advisor in Somalia.
          </p>
          <p>
            My diverse experience extends to <b>teaching, curriculum development, and consultancy</b> roles in Kenya 
            and Somalia, working with organizations like <b>UNICEF, UNESCO, and USAID.</b>  Significant achievements 
            include developing the Pre-service Teacher Education Curriculum for Somaliland and leading the TIVET 
            curriculum project in Somalia.
          </p>
          <p>
            I hold an <b> M.Ed. from Khartoum</b>, an <b>M.A. in Sociology</b> , and a <b>Ph.D. in Religion </b> from the University of Nairobi. 
            My educational background and practical experience equip me to drive positive changes in educational 
            systems worldwide.
          </p>
        </div><br />
        <div className="image-section">
          <img src={imgadan} alt="Curriculum Specialist" />
        </div><br />
      </div><br /><br />
    </div>
  );
}

export default About;
