const styles = ui =>({
    imgContainer : {
        display: "flex",
        justifyContent: "center",
        marginTop: ui.spacing(7),
        marginLeft: ui.spacing(-4),
    },
    remGuess : {
        textAlign: "center",
        marginLeft: ui.spacing(-4),
    },
    answer : {
        letterSpacing: ui.spacing(4),
        fontWeight: "900",
        fontSize: "26px"
    },
    btnContainer : {
        width: "60%",
        marginLeft: "20%",
        marginRight: "20%",
        textAlign: "center",
    }
});

export default styles;