import { useContext, useState } from "react"
import { authContext } from "../contexts/AuthContexts"
import { toast } from "sonner"

export const withPermission = (action) => {
    const [auth, setAuth] = useState(false)
    const { setPendingAction, setOpenLoginModal } = useContext(authContext)

    return (...args) => {
        if (!auth) {
            toast.error("You have to be logged in")
            // show the login modal
            setOpenLoginModal(true)
            // save the pending action
            setPendingAction(() => () => action(...args))
        } else {
            action(...args)
        }
    }
}