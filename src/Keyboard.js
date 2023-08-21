
function Keyboard({ clickHandle, clearScreen, calculate }) {


  return (
    <div className="keyboard">
      <div className="keys">
        <input type="button" value={"C"} onClick={clearScreen} className="keyC" />
        <input type="button" value={"<"} onClick={clickHandle} className="keyG" />
        <input type="button" value={">"} onClick={clickHandle} className="keyG" />
        <input type="button" value={"/"} onClick={clickHandle} className="keyG" />
      </div>
      <div className="keys">
        <input type="button" value={"7"} onClick={clickHandle} className="key" />
        <input type="button" value={"8"} onClick={clickHandle} className="key" />
        <input type="button" value={"9"} onClick={clickHandle} className="key" />
        <input type="button" value={"*"} onClick={clickHandle} className="keyG" />
      </div>
      <div className="keys">
        <input type="button" value={"4"} onClick={clickHandle} className="key" />
        <input type="button" value={"5"} onClick={clickHandle} className="key" />
        <input type="button" value={"6"} onClick={clickHandle} className="key" />
        <input type="button" value={"-"} onClick={clickHandle} className="keyG" />
      </div>
      <div className="keys">
        <input type="button" value={"1"} onClick={clickHandle} className="key" />
        <input type="button" value={"2"} onClick={clickHandle} className="key" />
        <input type="button" value={"3"} onClick={clickHandle} className="key" />
        <input type="button" value={"+"} onClick={clickHandle} className="keyG" />
      </div>
      <div className="keys">
        <input type="button" value={"0"} onClick={clickHandle} className="key" />
        <input type="button" value={"00"} onClick={clickHandle} className="key" />
        <input type="button" value={"."} onClick={clickHandle} className="key" />
        <input type="button" value={"="} onClick={calculate} className="keyE" />
      </div>
    </div>
  )
}


export default Keyboard;
