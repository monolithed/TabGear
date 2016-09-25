import React, { Component, PropTypes } from 'react';
import './List.css';

class List extends Component {
	constructor (properties) {
		super(properties);

		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}

	open (event) {
		let { index } = event.currentTarget.dataset;
		let { actions } = this.props;

		actions.open(index);
		event.preventDefault();
	}

	close (event) {
		let { id } = event.currentTarget.dataset;
		let { actions } = this.props;

		actions.close(id);

		event.stopPropagation()
		event.preventDefault();
	}

	load (name) {
		let { items } = this.props;

		return items.map((items, key) => {
			let { id, index, title, incognito, favIconUrl, highlighted } = items;

			return (
				<li className={
					`${name} ${name}-state_${incognito && 'incognito'} ${name}-state_${highlighted && 'highlighted'}`
				}
				    key={ key }
				>
					<a className={ `${name}-link` }
					   data-index={ index }
					   href="#"
					   onClick={ this.open }
					>

						<img className={ `${name}-icon` } src={ favIconUrl } alt="" />
						<span className={ `${name}-text` }> { title } </span>
						<span className={ `${name}-close` }
						      data-id={ id }
						      onClick={ this.close }
						> </span>
					</a>
				</li>
			);
		});
	}

	render () {
		return <div className="tg-list">
			{ this.load('tg-list__item') }
		</div>;
	}
}

List.propTypes = {
	items  : PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

export default List;
