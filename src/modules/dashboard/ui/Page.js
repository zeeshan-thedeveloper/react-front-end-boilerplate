import React from 'react';

import { connect } from "react-redux";


function DashboardPage(props) {
    return (
        <div>
            It's DashboardPage
        </div>
    );
}
const mapState = (state) => ({
    // loading: getLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
    // onLogin: (data) => dispatch(loginUser(data))
});

// export default AuthenticationPage

export default connect(mapState, mapDispatchToProps)(DashboardPage)
