import React, { Component, PropTypes } from 'react';
import './List.css';

class List extends Component {
	constructor (properties) {
		super(properties);

		this.state = {
			active: false
		}

		this.onTab = this.onTab.bind(this);
	}

	onTab (event) {
		let { index } = event.currentTarget.dataset;

		this.props.onTab(index);
		event.preventDefault();
	}

	items (name) {
		let { items } = this.props;

		return items.map(({ index, title, incognito, favIconUrl, highlighted }, key) => {
			return (
				<li className={ `${name} ${name}-incognito_${incognito} ${name}-highlighted_${highlighted}` }
				    key={ key }
				>
					<a className={ `${name}-link` }
					   data-index={ index }
					   onClick={ this.onTab }
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
