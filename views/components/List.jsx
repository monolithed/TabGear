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

		return items.map(({ url, title, icon, id, active }, index) => {
			return (
				<li className={ name } key={ index }>
					<a className={ `${name}-link` } href={ url } onClick={ this.onClick.bind(this) }>
						<img className={ `${name}-icon` } src={ icon } alt="" />
						<span className={ `${name}-text` }> { title } </span>
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
	items: PropTypes.array.isRequired
}

export default List;
