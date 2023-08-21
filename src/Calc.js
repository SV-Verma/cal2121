import { useState } from "react"
import Keyboard from "./Keyboard"

function Calc() {
  const [result, setresult] = useState('');
  const clickHandle = (e) => {
    setresult(result.concat(e.target.value));
  }

  const clearScreen = () => {
    setresult("");
  }

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setresult(eval(result).toString());
  }

  return (
    <div className="calc">
      <div className="main-calc">
        <div className="heading-calc">CALCULATOR</div>
        <div className="screen-calc">
          <input type="text"
            value={result}
            placeholder="0" className="text-calc"
            readOnly />

        </div>
        <Keyboard
          clickHandle={clickHandle}
          clearScreen={clearScreen}
          calculate={calculate}
        />
      </div>
    </div>
  )
}


export default Calc;
