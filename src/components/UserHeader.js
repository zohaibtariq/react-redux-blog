import React       from "react"
import {connect}   from "react-redux"
import {fetchUser} from "../actions"
// import {fetchUsers} from "../actions"

class UserHeader extends React.Component{
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }
    render() {
        if(this.props.users){
            const user = this.props.users.find(user => user.id === this.props.userId)
            //if(this.props.user.length > 0)
            if(!user)
                return null;
            return (
                <div className={`header`}>{user.name}</div>
                /*<div className={`header`}>{this.props.user.name}</div>*/
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {users:state.users};
}
export default connect(mapStateToProps, {fetchUser})(UserHeader)