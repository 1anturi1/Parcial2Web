import React from 'react';
import { FormattedDate } from 'react-intl';
import { FormattedNumber } from 'react-intl';
import { FormattedPlural } from 'react-intl';
import {FormattedMessage} from 'react-intl';
export default class Movie extends React.Component {
	
	render() {
		return (
			<tr>
				<th scope="row">{this.props.offer.id}</th>
				<td>{this.props.offer.name}</td>
				<td>{this.props.offer.company}</td>
				<td>
				{this.props.offer.salary}
					<FormattedPlural value={this.props.offer.salary}
						one= {<FormattedMessage id = "SingularMillion"/>}
						other={<FormattedMessage id = "PluralMillion"/>}/>
						
				</td>
				<td>{this.props.offer.city}</td>
				<td>
					<FormattedDate
						value={new Date(this.props.offer.date)}
						year='numeric'
						month='long'
						day='numeric'
						weekday='long'
					/>
				</td>
				<td> <FormattedNumber
					value={this.props.offer.numVisits}
				/>
				</td>
			</tr>
		);
	}
}