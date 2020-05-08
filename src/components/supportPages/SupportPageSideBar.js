import React from 'react';
import { useScrollBody } from '../../hooks/scroll.hook';
import Injector from '../Injector';

const SupportPageSideBar = ({ contentModules }) => {
    
  useScrollBody();
  return ( 
    <div className="div-container home-wrapper c-support-side-bar">
      <div className='c-support-side-bar__wrapper'>
        { contentModules && contentModules.length &&
          <Injector contentModules={contentModules}/> 
        }
      </div>
    </div>
  );
}

export default SupportPageSideBar;