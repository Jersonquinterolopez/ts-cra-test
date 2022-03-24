import { useEffect, useState } from "react"

const UseEffectComponent = () => {
    const [val, valSet] = useState(1)

    useEffect(() => {
        window.setInterval(() => {
            valSet(v => v + 1)
        }, 1000)
    }, []);

    return <div>{val}</div>
}

export default UseEffectComponent