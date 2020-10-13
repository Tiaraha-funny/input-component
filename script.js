import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input";

class InputApp extends React.Component {
  render() {
    return (
      <main>
        <header>
          <h2>Input form</h2>
        </header>
        <form>
          <div>
            <p>{`<Input />`}</p>
            <Input label="placeholder" variant="label">Label</Input>
          </div>
          <div>
            <p>{`<Input error/>`}</p>
            <Input label="placeholder" variant="error">Label</Input>
          </div>
          <div>
            <p>{`<Input disabled />`}</p>
            <Input label="placeholder" variant="disabled" >Label</Input>
          </div>
          <div>
            <p>{`<Input helperText="Some interesting text />`}</p>
            <Input label="placeholder" variant="interesting">Some interesting text</Input>
          </div>
          <div>
            <p>{`<Input helperText="Some interesting text error />`}</p>
            <Input label="placeholder" variant="interestingText">Some interesting text</Input>
            {/* <p style={{color:"#D32F2F"}}>{`Some interesting text`}</p> */}
          </div>
          <div>
            <p>{`<Input startIcon />`}</p>
            <Input label="icon start" startIcon="contact">Placeholder</Input>
          </div>
          <div>
            <p>{`<Input endIcon />`}</p>
            <Input label="icon end" endIcon="padlock">Placholder</Input>
          </div>
          <div>
            <p>{`<Input value="Text"/>`}</p>
            <Input label="text" value="Text">Placholder</Input>
          </div>
          <div>
            <p>{`<Input size="sm"/>`}</p>
            <Input label="sm size" size="sm">Placholder</Input>
          </div>
          <div>
            <p>{`<Input size="md"/>`}</p>
            <Input label="md size" size="md">Label</Input>
          </div>
          <div>
            <p>{`<Input fullWidth/>`}</p>
            <Input label="width" size="fullwidth" >Label</Input>
          </div>
          <div>
            <p>{`<Input multiline row="4" />`}</p>
            <Input label="multiline" row="4">Your name @ DevChallenges.io</Input>
          </div>
        </form>
      </main>
    );
  }
}

ReactDOM.render(<InputApp />, document.getElementById("root"));
