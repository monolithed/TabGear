import React, { Component, PropTypes } from 'react';
import './List.css';

class List extends Component {
	constructor (properties) {
		super(properties);

		this.state = {
			active: false
		}

		this.onClick = this.onClick.bind(this);
	}

	onTab (event) {
		let { id } = ;

		this.props.onTab(id);
		event.preventDefault();
	}

	items (name) {
		let { items } = this.props;

		return items.map(({ id, title, incognito, favIconUrl }, index) => {
			return (
				<li className={ name } key={ index }>
					<a className={ `${name}-link ${ name }-incognito_${ incognito }` }
					   onClick={ this.onTab }
					   data-id={ id }
					   href="#"
					>

						<img className={ `${name}-icon` } src={ favIconUrl } alt="" />
						<span className={ `${name}-text` }> { title } </span>
					</a>
				</li>
			);
		});
	}

	render () {
		return <div className="tg-list">
			{ this.items('tg-list__item') }
		</div>;
	}
}

List.propTypes = {
	onTab: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired
}

export default List;
