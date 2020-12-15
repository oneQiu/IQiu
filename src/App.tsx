import React, { Component } from "react"
import RouteView from "@routes/index"
import routeConfig from "@routes/config"
export default class App extends Component {
	render() {
		window.location.href = './404.html'
		return (
			<div>
				<RouteView defaultConfig={routeConfig}/>
			</div>
		)
	}
}
