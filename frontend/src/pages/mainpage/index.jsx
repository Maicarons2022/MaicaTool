import {Button, NavPageContainer} from "react-windows-ui";
import {Test} from "../../../wailsjs/go/main/App";
import {useState} from "react";

const Mainpage = (pop) => {
    const [resultText, setResultText] = useState("");
    const updateResultText = (result) => setResultText(result);
    function TestOut(){
        return Test().then(updateResultText)
    }

    return (
        <NavPageContainer
            hasPadding={true}
            animateTransition={true}>
            <h1>{pop.first.toString()}</h1>
            <h1>{resultText}</h1>
            <Button onClick={TestOut} value="time"></Button>
        </NavPageContainer>
    )
}

export default Mainpage;