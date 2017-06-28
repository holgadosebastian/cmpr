import React from 'react';

class Cluster extends React.Component {
	render(){
		return (
			<div className="Cluster">
				<header className="Cluster__header">
					<div className="Cluster__overlay"></div><img className="Cluster__image" src="https://fieldbook.com/attachments/58b091f0e9f98d0300230abe/45a10bfb-c571-40b7-9052-d99ca5a4d76d/25-systems.jpg"/>
					<div className="Cluster__title">
						<p>{this.props.brandName}</p>
						<h2>{this.props.name}</h2>
						<div className="Cluster__rating"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star-o"></span><span className="fa fa-star-o"></span></div>
					</div><span className="Cluster__price">${this.props.price}</span>
				</header>
				<div className="Cluster__body">
					<ul className="Cluster__specs">
						<li><span className="Cluster__label">volume: </span><span className="Cluster__info">16L</span></li>
						<li><span className="Cluster__label">laptop size: </span><span className="Cluster__info">15&quot;</span></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Cluster
