import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function Home() {
    const userContext = useContext(UserContext)
    if(!userContext) return null
    const {userData} = userContext
    return (
        <div>
            <h2>Hello {userData?.username}</h2>
            
        </div>
    )
}
