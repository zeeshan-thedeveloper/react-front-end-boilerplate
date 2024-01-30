import { Routes } from "../../routes/Routes"
import { CssBaseline } from '@mui/material';

import { GlobalStyles } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/system';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { connect } from "react-redux";

// for now just to test things i have kept theme in file.

import theme1 from "../../../shared/global/theme/theme1";
import theme2 from "../../../shared/global/theme/theme2";
import { useEffect, useState } from "react";
import { getCurrentTheme, getIsThisValidTanent } from "../logic/selectors";
import { analyzeTanent } from "../logic/actions";
import { Page404 } from "../../404";

const App = ({ currentTheme, isThisValidTanent, analyzeTanent }) => {
    // we need to fetch theme values based on talent 
    const theme = createTheme(currentTheme);
    useEffect(() => {
        analyzeTanent();
    }, [])

    return <StyledThemeProvider theme={theme}>
        {isThisValidTanent ? <Routes /> : <Page404 />}
    </StyledThemeProvider>

}


const mapState = (state) => ({
    currentTheme: getCurrentTheme(state),
    isThisValidTanent: getIsThisValidTanent(state)
})

const mapDispatchToProps = (dispatch) => ({
    analyzeTanent: (data) => dispatch(analyzeTanent(data))
});


export default connect(mapState, mapDispatchToProps)(App)