import React from 'react';
import { buildFramesEditorialProps } from '../adapters/frames.adapter';
import ReactPlayer from 'react-player';
import TabsContainer from'./TabsContainer';

class FramesEditorial  extends React.Component{
    constructor(props){
			super(props);
    }

    render(){
      const {title, tabs, frames, video, contents} = buildFramesEditorialProps(this.props); 
      console.log('props:', title, tabs, frames, video, contents)
			return ( 
      <div className="c-frames-editorial__container">
        <h2>{title}</h2>
        <ReactPlayer url={video} controls={true} className="c-video-container"/>
        <div className="c-frame_images-container">{
          frames.map(frame => frame.images.map((image, index) => <img className={`c-frames_image image-${index}`} src={image} />))
        } </div>
        <div className="c-frame_tabs-container">
          <TabsContainer tabs={tabs} />
        </div>
        <div className="c-frame_contents-container">
          {
            contents.map(content =>
              <span className="c-frame_content-container" style={{ backgroundColor: content.iconName}}>
                <div>{ content.title }</div>
                <div>{ content.description }</div>
              </span>
            )
          }
        </div>
      </div>
			)
    }
}
export default FramesEditorial