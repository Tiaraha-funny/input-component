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
            <label>label</label>
            <Input label="placeholder">Placholder</Input>
          </div>
          <div>
            <p>{`<Input error/>`}</p>
            <label>label</label>
            <Input label="placeholder" variant="error">Placholder</Input>
          </div>
          <div>
            <p>{`<Input disabled />`}</p>
            <label>label</label>
            <Input label="placeholder" variant="error">Placholder</Input>
          </div>
          <div>
            <p>{`<Input helperText="Some interesting text />`}</p>
            <label>label</label>
            <Input variant="error">Some interesting text</Input>
          </div>
          <div>
            <p>{`<Input startIcon />`}</p>
            <label>label</label>
            <Input label="placeholder" startIcon="contact">Placholder</Input>
          </div>
          <div>
            <p>{`<Input endIcon />`}</p>
            <label>label</label>
            <Input label="placeholder" endIcon="padlock">Placholder</Input>
          </div>
          <div>
            <p>{`<Input value="Text"/>`}</p>
            <label>label</label>
            <Input label="text" value="Text">Placholder</Input>
          </div>
          <div>
            <p>{`<Input size="sm"/>`}</p>
            <label>label</label>
            <Input label="sm size" size="sm">Placholder</Input>
          </div>
          <div>
            <p>{`<Input size="md"/>`}</p>
            <label>label</label>
            <Input label="md size" size="md" />
          </div>
          <div>
            <p>{`<Input fullWidth/>`}</p>
            <label>label</label>
            <Input label="width" size="fullwidth" />
          </div>
          <div>
            <p>{`<Input multiline row="4" />`}</p>
            <label>label</label>
            <Input label="multiline" row="4">Your name @ DevChallenges.io</Input>
          </div>
        </form>
      </main>
    );
  }
}

ReactDOM.render(<InputApp />, document.getElementById("root"));
