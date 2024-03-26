import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers/reducers.jsx';
import {
  changeOperation,
  clearDisplay,
  equals,
  memoryAdd,
  memoryClear,
  memoryRecall,
  typeToScreen,
} from './store/actions/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButtonClick = (event) => {
    dispatch(typeToScreen(event.target.value));
  };

  const handleOperationChange = (event) => {
    dispatch(changeOperation(event.target.value));
  };

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };

  const handleEquals = () => {
    dispatch(equals());
  };

  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  };

  const handleMemoryClear = () => {
    dispatch(memoryClear());
  };

  const handleMemoryRecall = () => {
    dispatch(memoryRecall());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={handleMemoryAdd} />
              <CalcButton value={'MR'} onClick={handleMemoryRecall} />
              <CalcButton value={'MC'} onClick={handleMemoryClear} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={handleButtonClick} />
              <CalcButton value={2} onClick={handleButtonClick} />
              <CalcButton value={3} onClick={handleButtonClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleButtonClick} />
              <CalcButton value={5} onClick={handleButtonClick} />
              <CalcButton value={6} onClick={handleButtonClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleButtonClick} />
              <CalcButton value={8} onClick={handleButtonClick} />
              <CalcButton value={9} onClick={handleButtonClick} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={handleOperationChange} />
              <CalcButton value={0} onClick={handleButtonClick} />
              <CalcButton value={'-'} onClick={handleOperationChange} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={handleOperationChange} />
              <CalcButton value={'/'} onClick={handleOperationChange} />
              <CalcButton value={'CE'} onClick={handleClearDisplay} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={handleEquals} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
import React, { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import { initialState, reducer } from './store/reducers';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  equal,
  memoryPlus,
  memoryRecall,
  memoryClear,
} from './store/actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (number) => {
    dispatch(applyNumber(number));
  };

  const handleOperationClick = (operation) => {
    dispatch(changeOperation(operation));
  };

  const handleClearDisplayClick = () => {
    dispatch(clearDisplay());
  };

  const handleEqualClick = () => {
    dispatch(equal());
  };

  const handleMemoryPlusClick = () => {
    dispatch(memoryPlus());
  };

  const handleMemoryRecallClick = () => {
    dispatch(memoryRecall());
  };

  const handleMemoryClearClick = () => {
    dispatch(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={handleMemoryPlusClick} />
              <CalcButton value={'MR'} onClick={handleMemoryRecallClick} />
              <CalcButton value={'MC'} onClick={handleMemoryClearClick} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={() => handleNumberClick(1)} />
              <CalcButton value={2} onClick={() => handleNumberClick(2)} />
              <CalcButton value={3} onClick={() => handleNumberClick(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberClick(4)} />
              <CalcButton value={5} onClick={() => handleNumberClick(5)} />
              <CalcButton value={6} onClick={() => handleNumberClick(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberClick(7)} />
              <CalcButton value={8} onClick={() => handleNumberClick(8)} />
              <CalcButton value={9} onClick={() => handleNumberClick(9)} />
            </div>
            <div className="row">
              <CalcButton
                value={'+'}
                onClick={() => handleOperationClick('+')}
              />
              <CalcButton value={0} onClick={() => handleNumberClick(0)} />
              <CalcButton
                value={'-'}
                onClick={() => handleOperationClick('-')}
              />
            </div>
            <div className="row">
              <CalcButton
                value={'*'}
                onClick={() => handleOperationClick('*')}
              />
              <CalcButton
                value={'/'}
                onClick={() => handleOperationClick('/')}
              />
              <CalcButton value={'CE'} onClick={handleClearDisplayClick} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={handleEqualClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

*/
