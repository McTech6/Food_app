import React from 'react';
import images from '../../constants/images'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
     <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="" />
     </div>
     <div className="app__aboutus-content flex__center">
       <div className="app__aboutus-content_about">
         <h1 className="headtext__cormorant">About Us</h1>
         <img src={images.spoon} className='img' alt="" />
         <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem, voluptatibus ad quisquam sequi facilis.</p>
         <button className="custom__button" type='button'>No More</button>
       </div>
       <div className="app__aboutus-content-knife flex__center">
           <img src={images.knife} alt="" />
       </div>
       <div className="app__aboutus-content flex__center">
       <div className="app__aboutus-content_history">
         <h1 className="headtext__cormorant">Our History</h1>
         <img src={images.spoon} className='img' alt="" />
         <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem, voluptatibus ad quisquam sequi facilis.</p>
         <button className="custom__button" type='button'>No More</button>
       </div>
     </div>
     </div>
     </div>
);

export default AboutUs;
