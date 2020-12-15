import React, { Component } from "react"
import { connect } from "react-redux"
import { TUserState } from "@redux/user/types"

/**
 * 首页框架
 */
interface IProps {}
class Index extends Component<IProps> {
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		return <h2>test</h2>
	}
}

const mapStateToProps = (state: TUserState) => {
	return {
		...state,
	}
}
export default connect(mapStateToProps)(Index)
