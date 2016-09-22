import React, { Component, PropTypes } from 'react';
import './List.css';

class List extends Component {
	constructor (properties) {
		super(properties);

		this.state = {
			active: false
		}
	}

	onClick (event) {
		this.setState({ active: true });
		event.preventDefault();
	}

	items (name) {
		let { items } = this.props;

		return items.map((item, index) => {
			return (
				<li className={ name } key={ index }>
					<a className={ `${name}-link` } href={ item.get('url') } onClick={ this.onClick.bind(this) }>
						<img className={ `${name}-icon` } src={ item.get('icon') } alt="" />
						<span className={ `${name}-text` }> { item.get('title') } </span>
					</a>
				</li>
			);
		});
	}

	render () {
		return <div className="tg-list">
			{
				this.items('tg-list__item')
			}
		</div>;
	}
}

List.propTypes = {
	items: PropTypes.object.isRequired
}

export default List;
