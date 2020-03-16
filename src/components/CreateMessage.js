import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class CreateMessage extends Component {
	render() {
		return (
			<div className="container">
				{/* Header */}
				<form>
					<div className="form-group">
						<textarea
							className="form-control"
							name=""
							id=""
							cols="30"
							rows="10"
							placeholder="Type your message here..."
						/>
					</div>

					<button type="submit" className="form-control btn btn-primary">
						Submit
					</button>
					<hr />
					<div className="response">
						<div className="alert alert-success">Message Sent!</div>
						<div className="alert alert-danger">Failed to send!</div>
					</div>
				</form>
			</div>
		)
	}
}
