import React, { Component } from "react"
import RouteView from "@routes/index"
import routeConfig from "@routes/config"
import { Link } from "react-router-dom"

export default class App extends Component {
	render() {
		return (
			<div>
				<RouteView defaultConfig={routeConfig}/>
				<Link to='/asd'>Click</Link>
			</div>
		)
	}
}
