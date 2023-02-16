import { useState } from 'react'
import {Chat} from './Chat'
export const Form = ({setDdt}) => {
    const [frmDt, setFrmDt] = useState("")

    // recieve data from the input field as we type
    const getDataFromInputFieldAsWeType = (event) => {
        const { value } = event.target
        setFrmDt(value)
    }
    const handleOnFormSubmit = (e) => {
        e.preventDefault() // prevent default form submit
        setDdt(frmDt)
    }
    return (
        <div>
            {/*sending props called frmDt */}
            <Chat frmDt={frmDt} />
        <form onSubmit={handleOnFormSubmit}>
        <input onChange={getDataFromInputFieldAsWeType} type="text" name="" id="" required />
        <button type="submit">submit</button>
        </form>
        </div>
    )
}