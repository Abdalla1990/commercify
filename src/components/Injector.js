import React from 'react';
import { connect } from 'react-redux';
import Importer from './tools/Importer';
import dispatcher from '../components/tools/dispatcher';
import { changeRoute, changePageType } from '../actions/router';

const CmsModule = ({ dispatch, type, ...props }) => {
	const ModuleComponent = Importer[type];
	if (props.path !== undefined) {
		dispatcher(dispatch, changeRoute, props.path);
		dispatcher(dispatch, changePageType, type);
	}
	console.log({ ModuleComponent });
	return <ModuleComponent {...props} />;
};

class Injector extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { contentModules, type, path, dispatch } = this.props;

		return (
			<React.Fragment>
				{
					// regular contentModules injected in any page
					contentModules && contentModules.length ? (
						contentModules.map((module, index) =>
							module !== undefined ? (
								<CmsModule {...module} key={index} />
							) : undefined
						)
					) : (
						<div className='div-container home-wrapper'>
							<CmsModule dispatch={dispatch} path={path} type={type} />
						</div>
					)
				}
			</React.Fragment>
		);
	}
}
export default connect()(Injector);
