import { AmplifyTheme } from 'aws-amplify-react';
const theme = {
    ...AmplifyTheme,
    formContainer: {
        ...AmplifyTheme.formContainer,
        margin: "0",
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    sectionHeader: {
        ...AmplifyTheme.sectionHeader,
        backgroundColor: "#2a8a92",
        fontSize: "1.1em"

    },
    input: {
        ...AmplifyTheme.input,
        marginTop: "3px"

    },
    inputLabel: {
        ...AmplifyTheme.inputLabel,
        marginTop: "10px",
        marginBottom: "2px",
        fontSize: "0.9em"
    },
    hint: {
        ...AmplifyTheme.hint,
        marginTop: "10px",
        marginLeft: "5px",
        fontSize: "0.8em"
    },
    sectionFooterSecondaryContent: {
        ...AmplifyTheme.sectionFooterSecondaryContent,
        margin: "10px",
        fontSize: "0.8em"
    },
    button: {
        ...AmplifyTheme.button,
        marginLeft: "5px",
        backgroundColor: "#68b8c1",
        color: "white",
        fontSize: "0.9em"
    },
    navButton: {
        ...AmplifyTheme.navButton,
        backgroundColor: "#68b8c1",
        padding: "10px",
        fontWeight: "bold",
        color: "white",
        margin: "0",
    },
    navBar: {
        ...AmplifyTheme.navBar,
        backgroundColor: "#fff",
    },
    navRight: {
        ...AmplifyTheme.navRight,
        margin: "0 8px"
    },
    navItem: {
        ...AmplifyTheme.navItem,
        padding: "10px"
    },

}

export default theme;