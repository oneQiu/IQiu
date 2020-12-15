import React, { Component } from "react"
import RouteView from "@routes/index"
import routeConfig from "@routes/config"

export default class App extends Component {
	render() {
		return (
			<div>
				<RouteView defaultConfig={routeConfig}/>
			</div>
		)
	}
}
