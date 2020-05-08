import React from 'react';
import { connect } from 'react-redux';
import { fetchContentModules, getHeaderAsset, filterContentModules } from './SupportPageContainer.adapters';
import Injector from '../Injector';
import { useScrollBody } from '../../hooks/scroll.hook';
import { pipe } from 'ramda';
import SupportPageSideBar from './SupportPageSideBar';
import SupportPageHeader from './SupportPageHeader';
import SupportPageCoreContent from './SupportPageCoreContent';
const SupportPage = props => {
    
  useScrollBody();
  const { contentModules, header  } = props; 
  // console.log({ props });
  return ( 
    <div className="div-container home-wrapper c-support">
      <div className="div-container home-wrapper c-support-header">
        { header && 
          <SupportPageHeader {...header} /> 
        }
      </div>
      <div className="c-support-body-wrapper">
        <div className="c-support-core-wrapper">
          { contentModules && contentModules.length &&
            <SupportPageCoreContent contentModules={contentModules}/> 
          }
        </div>
        <div className="c-support-side-wrapper">
        { contentModules && contentModules.length &&
          <SupportPageSideBar contentModules={contentModules}/> 
        }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) =>( {
  header : getHeaderAsset(fetchContentModules(props.path)(state)),
  contentModules : state.cmsData.cPages && filterContentModules(fetchContentModules(props.path)(state)),
})

export default connect(mapStateToProps)(SupportPage)