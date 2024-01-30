import { connect } from "react-redux";
import { loginUser } from "../logic/actions";
import { getLoading } from "../logic/selectors"
import { useState } from "react";
import { MyStyledButton, StyledContainer, StyledHeading, StyledTextField } from "./styled";
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './styles.module.scss'

const AuthenticationPage = ({ onLogin, loading }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin({ email, password });
    };

    return (
        <div >
            <StyledContainer className={styles.container}>
                <div>
                    <StyledHeading>
                        AuthenticationPage
                    </StyledHeading>
                </div>
                <div>
                    <StyledTextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <StyledTextField
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <MyStyledButton variant="contained" onClick={handleLogin}>
                    Login
                </MyStyledButton>
                <div>
                    {loading && <CircularProgress />}
                </div>
            </StyledContainer>

        </div>
    );
};



const mapState = (state) => ({
    loading: getLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
    onLogin: (data) => dispatch(loginUser(data))
});

// export default AuthenticationPage

export default connect(mapState, mapDispatchToProps)(AuthenticationPage)