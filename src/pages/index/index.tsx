import React, { Component, Dispatch } from "react"
import { connect } from "react-redux"
import { TUserActionTypes, TUserState } from "@redux/user/types"

/**
 * 首页框架
 */
interface IProps {}
class Index extends Component<IProps> {
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		return <h2></h2>
	}
}

const mapStateToProps = (state: TUserState) => {
	return {
		...state,
	}
}
const mapDispatchToProps = (dispatch: Dispatch<TUserActionTypes>) => ({
	setName: () => {},
})
export default connect(mapStateToProps, mapDispatchToProps)(Index)
