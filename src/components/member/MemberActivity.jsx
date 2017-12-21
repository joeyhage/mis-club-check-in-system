import React from 'react';
import { Card } from '../common';

export class MemberActivity extends React.Component {

	render() {
		return (
			<Card title='Activity' up={this.props.up}>
				<table className='table is-striped is-hoverable is-fullwidth' id='activity'>
					<thead>
						<tr>
							<th>Type</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{this.props.children}
					</tbody>
				</table>
			</Card>
		);
	}
}