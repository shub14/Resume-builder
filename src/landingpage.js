
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import { Menu, Dropdown, Icon } from 'antd';
import sample from './sample.mp4';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.png';
import React from 'react'




const menu = (
    <Menu style={{float:'right', margin:'10px', borderWidth:"1px", borderStyle:"solid", background:"#ffffff"}}>
      <Menu.Item key="0" style={{listStyleType:"none"}}>
        <i class="fab fa-facebook"></i>
        <button className="loginBtn">Facebook Login</button>
      </Menu.Item>
      <Menu.Item key="1" style={{listStyleType:"none"}}>
        <i class="fab fa-google"></i>
        <button className="loginBtn">Google Login</button>
      </Menu.Item>
    </Menu>
  );
  
  function landingPage(){
    return (
      <div>
        <nav className="navbar">
          <div><img src={logo} alt="AppLogo" className="AppLogo"/></div>
        <div className="landingNav">
          <Link to="/chooseTemp" style={{textDecoration:'none'}}><button className="landingBtn">Resume Templates</button></Link>
          {/* <button className="landingBtn" disabled>Portfolio</button>
          <Dropdown overlay={menu} trigger={['click']}>
          <button className="landingBtn ant-dropdown-link" disabled>LOGIN</button> 
          </Dropdown> */}
        </div>
        </nav>

        {/* <div className="Separator"></div> */}

        <div className="carousel">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="https://freefrontend.com/assets/img/html-resume-templates/resume-stuff.png" alt="First slide"/>
            </Carousel.Item>
    
            <Carousel.Item>
              <img className="d-block w-100" src="https://freefrontend.com/assets/img/html-resume-templates/Sample-Resume.png" alt="Third slide"/>
            </Carousel.Item>
    
            <Carousel.Item>
              <img className="d-block w-100" src="https://freefrontend.com/assets/img/html-resume-templates/CSS3-Creative-Resume.png" alt="Third slide"/>
            </Carousel.Item>
          </Carousel>
        </div> 

        <div className="videoPlayer"> 
           {<video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
          </video>}
        </div>
        <div className="landingt" >
          <h3  style={{fontFamily: 'Pacifico',fontSize: '42px',textTransform:'capitalize',color:'#ebd72d'}}>Benifits Of Using a Resume Builder</h3><br/>
       <div className="landingt1">
       <h4 style={{fontFamily: 'Pacifico',fontSize: '26px',textTransform:'capitalize',color:'#ebd72d'}}> What is an Online Resume Builder?</h4>
       <p> An Online Resume Builder is a web application that
          provides the candidates with the resume templates that can be easily personalized 
        and be customized according to the candidate needs, 
        instead of starting everything on a blank white paper.
      There are a lot of free and premium resume builders online.When choosing the resume builder, 
      it is advised to check that it is up to date with the latest trends with
      the recruitment principles, to create the latest trendy resume online.</p><br/>
    <h4 style={{fontFamily: 'Pacifico',fontSize: '26px',color:'#ebd72d'}}>Advantages of using an Online Resume Builder:</h4>
<p>The advantages of using a resume builder that the job seekers need to consider while applying for their 
  new position includes,</p><br/>
<h5 style={{fontFamily: 'Pacifico',fontSize: '18px',textTransform:'capitalize',color:'#ebd72d'}}>1. Minimal or No Technical Skills Needed:</h5>
<p>While using a resume builder, the candidates can directly upload from their word document or enter it manually.
   Once the candidate has uploaded the information in the resume builder, 
   formatting the resume is easy and no coding knowledge is required to handle this and the resume builder 
   itself will take care of it since it is a predefined template.</p>
<h5 style={{fontFamily: 'Pacifico',fontSize: '18px',textTransform:'capitalize',color:'#ebd72d'}}>2. Low Maintenance:</h5>
<p>Generally, the candidates can create many versions of their resume based on the jobs they are interested in.
 Once the resume is created, it can be automatically downloaded either in PDF or .doc format.
  There is no need to worry about the technical aspects like hosting or maintain the site etc.</p>
<h5 style={{fontFamily: 'Pacifico',fontSize: '18px',textTransform:'capitalize',color:'#ebd72d'}}>3. Customizable Templates:</h5>
<p>The Online Resume Building platforms available in the market are more and they can be easily customized in terms of fonts and colors.
 The candidates can choose the formats and styles that are best suited for specific industries.
Using this, the candidates can design their own resume both in terms of printable resume and a resume website.</p><br/>
<h5 style={{fontFamily: 'Pacifico',fontSize: '26px',textTransform:'capitalize',color:'#ebd72d'}}>Conclusion:</h5>
<p>The Online Resume Builders helps the candidates to build their resume in a professional format by showcasing their strengths in a much presentable format.</p>     
       </div>
        </div>
      </div>
    )
  }
  

  export default landingPage;