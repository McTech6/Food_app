import React from 'react';
import {images} from '../../constants/';
import { SubHeading } from '../../components'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
  <div className="app__wrapper_info">
     
  </div>
  <div className="app__wapper_img">
       <SubHeading title="Chase the new Flavour" />
       <h1 className='app__header-h1'> The  Key To Find Dining</h1>
       <p className="p__opensans" style={{margin: '2rem 0'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione exercitationem rerum soluta officia magnam. Voluptatum, dolor?</p>
       <button className="custom__button" type='button'>Explore Menu</button>
  </div>
  <div className="app__header-image">
     <img src={images.welcome} alt="" />
     </div>
  </div>
);

export default Header;
