import React from 'react';
import {connect} from 'react-redux';
import { buildPageProps, getContentModuleFields } from '../adapters/pages.adapter';
import Injector from './Injector';
import { useScrollBody } from '../hooks/scroll.hook';
import history from './tools/history';

const DynamicPage = props => {
    
  useScrollBody();
  const { contentModules } = props; 
  return ( 
    <div className="div-container home-wrapper">
      { contentModules && contentModules.length ? 
        <Injector contentModules={contentModules}/> : 
        <Injector type='notFoundPage'/>
      }
    </div>
  );
}

const mapStateToProps = (state, props)=>{
    return {
      contentModules : state.cmsData.cPages && getContentModuleFields(buildPageProps(state.cmsData.cPages,props.path)),
    }
}

export default connect(mapStateToProps)(DynamicPage)