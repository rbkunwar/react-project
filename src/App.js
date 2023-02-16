import './App.css';
import { useState } from 'react';
import {Form} from './challange/Form'
import {Display} from './challange/Display';
// import {Display} from 'Display,j'
// import {Btns} from './Btns.js'
// import {Form} from 'Form.js'
const App = () => {
  const [ddt, setDdt] = useState("");
  // let counter = 125

  // const [counter, setCounter] = useState(0)
  // // const increament = () => {
  // //   setCounter(counter + 1)
  // //   console.log(counter)
  // // }
  // // const decreament = () => {
  // //   setCounter(counter - 1)
  // //   console.log(counter)
  // // }
  // const update = (operator) => {
  //   const fun = {
  //     "+": setCounter(counter + 1),
  //     "-": setCounter(counter - 1),
  //     reset: setCounter(0)
  //   }

  // fun[operator]()
  // //   // increament
  // //   if (operator === "+") {
  // //     setCounter(counter + 1)
  // //   }
  // //   // decreament
  // //   if (operator === "-") {
  // //     setCounter(counter - 1)
  // //   }
  // //   // reset
  // //   if (operator === "reset") {
  // //     setCounter(0)
  // //   }
  // }

  // return (
  //   <div className="App">
  //     {/* <Title /> */}
  //     <Display counter = {counter} />
  //     <Btns update = {update} />
      

  //   </div>
  // )}
  console.log(ddt)
  return (
    <div className='App'>
      <Form setDdt={setDdt} />
      <hr />
      <Display ddt={ddt}/>

    </div>
  )
}
      

export default App;
