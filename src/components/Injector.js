import React from 'react';
import Importer from './tools/Importer';
class Injector  extends React.Component{
    constructor(props){
      super(props);
    }
    
    CmsModule({
      type,
      ...props
    }) {
      const ModuleComponent = Importer[type];
      return (
        <ModuleComponent {...props}/>
      );
    }

    
    render(){
      const { contentModules, type, path } = this.props; 
      const { CmsModule } = this;
			return type !=='pdp' && type !== 'plp' && type !== 'dynamic' && type !== 'notFoundPage' && type !== 'support' ? ( 
        <div className="div-container home-wrapper">
          { // regular contentModules injected in any page
            contentModules && contentModules.map((module, index) => module !== undefined ?
            <CmsModule  {...module} key={index}/> :
            undefined
          )}
				</div>
      ) : (
        <div className="div-container home-wrapper">
          {// pdp || plp || dynamic page
            <CmsModule path={path} type={type}/> 
          }
				</div>
      )
    }
}
export default Injector