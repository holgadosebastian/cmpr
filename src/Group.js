import React from 'react';
import Cluster from './Cluster';
import './Group.css';

class Group extends React.Component {
	render(){
		return (
			<div className="Group">
				<h2>Backpacks</h2>
				<div className="Group__items">
					<Cluster name="Osprei"/>
				</div>
			</div>
		)
	}
}

export default Group
