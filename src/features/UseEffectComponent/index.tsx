import { useEffect, useState } from "react"

// setInterval execute a function every none depending the time we specify
// when we use valSet in this way:
// valSet(v => v + 1) valSet is gonna get access to the scope of the useState and 
// it's previous definition

const UseEffectComponent = () => {
    const [val, valSet] = useState(1)

    useEffect(() => {
        const timer = window.setInterval(() => {
            valSet(v => v + 1)
        }, 1000)

        return () => window.clearInterval(timer)
    }, []);

    return <div>{val}</div>
}

export default UseEffectComponent