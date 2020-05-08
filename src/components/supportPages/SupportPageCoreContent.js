import React from 'react';
import { connect } from 'react-redux';
import { fetchContentModules, getHeaderAsset, filterContentModules } from './SupportPageContainer.adapters';
import Injector from '../Injector';
import { useScrollBody } from '../../hooks/scroll.hook';


const SupportPageCoreContent = props => {
    
  useScrollBody();
  const { contentModules, header  } = props; 
  // console.log({ props });
  return ( 
    <div className="div-container home-wrapper">
      Core Content
    </div>
  );
}

// const mapStateToProps = (state, props) =>( {
//   header : getHeaderAsset(fetchContentModules(props.path)(state)),
//   contentModules : state.cmsData.cPages && filterContentModules(fetchContentModules(props.path)(state)),
// })

export default connect()(SupportPageCoreContent)