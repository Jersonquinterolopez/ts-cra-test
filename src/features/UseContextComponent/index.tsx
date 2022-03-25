import { useContext, useState } from 'react'
import UserContext, { UserState } from '../../store/store'

const ConsumerComponent = () => {
    const user = useContext<UserState>(UserContext)

    return <>
        <div>First: {user.firstName}</div>
        <div>LastName: {user.lastName}</div>
    </>
}

const UseContextComponent = () => {
    const [user, userSet] = useState<UserState>({
        firstName: "jane",
        lastName: 'smith'
    })

    return (
        <UserContext.Provider value={user}>
            <button
                onClick={() => userSet({
                    firstName: "jane",
                    lastName: 'wales'
                })}
            >Change context</button>
            <ConsumerComponent />
        </UserContext.Provider>
    )
}

export default UseContextComponent