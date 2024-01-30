import { setCurrentTheme, setIsThisValidTanent } from "./slice"

const analyzeTanent = (data) => (dispatch) => {
    // until api is created we will set response and redux manually.
    console.log("fetching details of tanent")

    // theme 1
    dispatch(setCurrentTheme({
        palette: {
            bg: {
                main: "green"
            },
            primary: {
                main: '#2196F3',
            },
            secondary: {
                main: '#2196F3',
            },
            error: {
                main: '#FF5252',
            },
            warning: {
                main: '#FFC107',
            },
            info: {
                main: '#00BCD4',
            },
            success: {
                main: '#4CAF50',
            },
        },

    }));

    // theme 2
    // dispatch(setCurrentTheme({
    //     palette: {
    //         bg: {
    //             main: "white"
    //         },
    //         primary: {
    //             main: '#FFC107',
    //         },
    //         secondary: {
    //             main: '#FF5722',
    //         },
    //         error: {
    //             main: '#F44336',
    //         },
    //         warning: {

    //             main: '#4CAF50',
    //         },
    //         info: {
    //             main: '#8BC34A',
    //         },
    //         success: {
    //             main: '#8BC34A',
    //         },
    //     }
    // }));

    dispatch(setIsThisValidTanent(true))

    console.log("fetched")
}

export { analyzeTanent }