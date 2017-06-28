import React from 'react';
import Cluster from './Cluster';

class Group extends React.Component {
	render(){
		return (
			<div className="Group">
				<h2 className="Group__title">{this.props.name}</h2>
				<div className="Group__container">
					{ this.props.items.map( item => (
						// TODO add correct id
						<div className="Group__item">
							<Cluster
								key={item.name}
								name={item.name}
								brandName={item.brandName}
								price={item.price}/>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Group
