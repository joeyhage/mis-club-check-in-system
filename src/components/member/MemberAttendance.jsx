import React from 'react';
import { Card, Table } from '../common';

export class MemberAttendance extends React.Component {

	render() {
		return (
			<Card title='Attendance' up>
				<Table id='attendance'>
					<thead>
						<tr>
							<th>Event Name</th>
							<th>Event Date</th>
						</tr>
					</thead>
					<tbody>
						{this.props.children}
					</tbody>
				</Table>
			</Card>
		);
	}
}