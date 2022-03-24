import { useState } from "react"

// [] = never
// we specify that array state is an array of numbers useState<number[]> 
// in the second example we define useState as a data type string or null 
// this is very helpful when we fetch data from the server

const UseStateComponent = () => {
    const [array, arraySet] = useState<number[]>([])
    const [name, nameSet] = useState<string | null>(null);

    return (
        <div>
            <div>
                <button onClick={() => arraySet([
                    ...array,
                    array.length + 1,
                ])} >Add to array</button>
                {JSON.stringify(array)}
            </div>
            <div>
                <button onClick={() => nameSet("Jack")} >Set Name</button>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}

export default UseStateComponent