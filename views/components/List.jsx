import React, { Component, PropTypes } from 'react';
import './List.css';

class List extends Component {
	constructor (properties) {
		super(properties);

		this.onOpen = this.onOpen.bind(this);
		this.onClose = this.onClose.bind(this);
	}

	onOpen (event) {
		let { index } = event.currentTarget.dataset;

		this.props.onOpen(index);
		event.preventDefault();
	}

	onClose (event) {
		let { id } = event.currentTarget.dataset;

		this.props.onClose(id);
		event.preventDefault();
	}

	items (name) {
		let { items } = this.props;

		return items.map(({ id, index, title, incognito, favIconUrl, highlighted }, key) => {
			return (
				<li className={
					`${name} ${name}-state_${incognito && 'incognito'} ${name}-state_${highlighted && 'highlighted'}`
				}
				    key={ key }
				>
					<a className={ `${name}-link` }
					   data-index={ index }
					   href="#"
					   onClick={ this.onOpen }
					>

						<img className={ `${name}-icon` } src={ favIconUrl } alt="" />
						<span className={ `${name}-text` }> { title } </span>
						<span className={ `${name}-close` }
						      data-id={ id }
						      onClick={ this.onClose }
						> </span>
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
	onOpen: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired
}

export default List;
