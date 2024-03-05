import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
   <div className="app__wrapper app__wrapper_img app__wrapper_img-reverse">
     <img src={images.chef} alt="" />
   </div>

   <div className="app__wrapper_info">
      <SubHeading title="Chef's word"/>
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
         <div className="app__chef-content_quote">
           <img src={images.quote} alt="" />
           <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, voluptas.</p>
         </div>
         <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quam atque earum aut eum nihil. Sequi voluptates eveniet unde, tempore facere, nulla saepe ea ex rem quo autem, placeat ab.</p>
      </div>
      <div className="app__chef-sign">
        <p className="p__opensans">Kelvin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
   </div>
  </div>
);

export default Chef;
