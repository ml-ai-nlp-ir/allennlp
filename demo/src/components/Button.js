import React from 'react';

/*******************************************************************************
  <Button /> Component
*******************************************************************************/

class Button extends React.Component {
    render() {
      const { outputState, runModel, inputs } = this.props;

      return (
      <button id="input--mc-submit" type="button" disabled={outputState === "working"} className="btn btn--icon-disclosure" onClick={ (event) => { runModel(event, inputs) }}>Run
        <svg>
          <use xlinkHref="#icon__disclosure"></use>
        </svg>
      </button>
      );
    }
  }

  export default Button;
