import React, { Component } from "react"
import RouteView from "./routes"

export default class App extends Component {
	render() {
		return (
			<div>
				<RouteView defaultConfig={[]}/>
			</div>
		)
	}
}
