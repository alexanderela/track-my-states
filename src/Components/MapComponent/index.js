import React, { PureComponent } from 'react';
import './MapComponent.css';
import { Map } from '@esri/react-arcgis';

class MapComponent extends PureComponent {
	constructor(props) {
		super(props); 
		this.state = {

		}
	}

	render() {
		return (
			<Map className='Map'/>
		)
	}
}

export default MapComponent;