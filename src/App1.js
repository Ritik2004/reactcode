//import "./styles.css";
import { useState } from "react";
// const countries = [
//   {
//     name:'India', value:'In', cities:[
//       'delhi','mumbai'
//     ]},
//     {
//       name:'Pak',value:'PK', cities:[
//         'lahore',
//         'Karachi'
//       ]},
//       {
//         name:'Bang', value:'BG', cities:[
//           'Dhaka','chitta'
//         ]},
// ]
const arr = ["a", "b", "c"];

export default function App() {
  const [setArray, setNewArray] = useState(arr);
  const [check, setCheck] = useState(false);
  const [index, curindex] = useState();
  function handleDelete(index) {
    let newArr = setArray;
    let filterArray = newArr.filter((el, i) => {
      return i !== index;
    });
    setNewArray(filterArray);
  }

  const handleCheckbox = (value, i) => {
    console.log(value);
    setCheck(!check);
    curindex(i);
  };
  return (
    <div className="App">
      <ul>
        {setArray.map((el, i) => {
          return (
            <li>
              <input
                type="checkbox"
                onChange={(e, i) => handleCheckbox(!e.target.value, i)}
              ></input>
              {el}
              {check && (
                <button onClick={() => handleDelete(i)}>Delete Item</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
