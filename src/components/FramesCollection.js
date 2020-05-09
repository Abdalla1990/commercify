import React from 'react';
import { connect } from 'react-redux';
import { buildFramesProps } from '../adapters/frames.adapter';
import { clone } from 'ramda';
class FramesCollection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title, images, content } = buildFramesProps(this.props);
		const imagesMob = clone(images);
		images.length !== 5 && images.splice(1, 0, content);
		return (
			<div>
				<div className='div-container frames-ds-wrapper core-element'>
					<dir className='c-frames-title'>
						<h1>{title}</h1>
					</dir>
					<div className='c-frame_images-container'>
						{images.map((image, index) => {
							return index !== 1 ? (
								<img className={`c-frames_image image-${index}`} src={image} />
							) : (
								<div className='c-frames_image'>
									<p className='content'>{content}</p>
								</div>
							);
						})}{' '}
					</div>
				</div>
				<div className='div-container frames-mb-wrapper'>
					<div className='c-frames-title'>
						<h1>{title}</h1>
					</div>
					<div className='c-frames-mb_image'>
						<p className='content'> {content} </p>
					</div>
					<div className='c-frames-mb_images-container'>
						{imagesMob.map((image) => (
							<img className='c-frames-mb_image' src={image} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(FramesCollection);
