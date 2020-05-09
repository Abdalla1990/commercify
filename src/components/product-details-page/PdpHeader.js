import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHeaderImageSource } from '../../selector/headerImageSelector';
const PdpHeader = ({ src }) => {
	useEffect(() => {
		src !== undefined && document.getElementById('app').classList.add('gray');
		return () => {
			src !== undefined &&
				document.getElementById('app').classList.remove('gray');
		};
	}, [src]);

	return src !== undefined ? (
		<div className='c-pdp-header-container'>
			<img className='c-pdp-header-image' src={src} />
		</div>
	) : null;
};

const mapPropToState = (state) => ({
	...fetchHeaderImageSource(state.pageType),
});
export default connect(mapPropToState)(PdpHeader);
