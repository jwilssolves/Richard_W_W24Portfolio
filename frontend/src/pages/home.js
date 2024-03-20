import React from 'react';
import resume from '../assets/Resume_3_19_2024.pdf';
import './home.css'; 
import profilePic from '../assets/images/profile/me.jpg'; 

const Home = () => {
  return (
    <div className="home-container">
      <section className="bio">
        <h2>Bio</h2>
        <img src={profilePic} alt="Richard Wilson" className="profile-pic"/> 
        <p>My name is Richard Wilson, I'm a hardworking student who loves golf, fishing, video games, and all things tech.</p>
      </section>

      <section className="resume">
        <h2>Resume</h2>
        <a href={resume} target="_blank" rel="noopener noreferrer">View My Resume</a>
      </section>

      <section className="cover-letter">
        <h2>Cover Letter</h2>
        <p>I am writing to express my keen interest in the Full Stack Developer position at [Company Name], as advertised. With a comprehensive background in computer programming and analysis, coupled with hands-on experience in full stack development at Katalyst Licensing and Promotions, I am enthusiastic about the opportunity to contribute to your team.</p>

        <p>Currently a Computer Programming & Analysis student at George Brown College, I have honed my skills in a range of programming languages including Java, JavaScript, Python, C#, HTML, CSS, PHP, Node, React, and React Native, among others. My education has been complemented by practical experience, such as my role in developing a full stack application to manage business processes at Katalyst Licensing and Promotions. This project, which encompasses inventory, orders, tracking, sales, scheduling, and forecasting, has sharpened my ability to design and implement efficient, scalable solutions.</p>

        <p>My technical proficiency extends beyond software development; I am skilled in Microsoft Office and Autodesk programs like AutoCAD, Inventor, and Revit. These skills were critical in my role at B. Wilson Engineering, where I streamlined the drawing approval process and ensured accuracy in design through AutoCAD. Additionally, my experience in troubleshooting and maintaining computer systems underscores my capacity to provide robust technical support and maintain high-performance IT infrastructures.</p>

        <p>I am excited about the prospect of bringing my diverse skill set, dedication to continuous learning, and passion for technology to [Company Name]. I am keen to contribute to innovative projects that drive the success of your organization and its clients.</p>

        <p>Thank you for considering my application. I look forward to the opportunity to further discuss how I can contribute to your team.</p>

        <p>Sincerely, Richard Jordan Wilson</p>
      </section>

      <section className="career-goal">
        <h2>Philosophy/Statement of Career Goal</h2>
        <p>"Be the change that you wish to see in the world." - Mahatma Gandhi</p>
        <p>I have a lot of goals and spirations in life, from coming from the engineering stream that i didnt enjoy, its been a long road getting here</p>

        <p>My goal is to develop something that will improve the quality of life of people somewhere in the world</p>
      </section>
    </div>
  );
};

export default Home;
