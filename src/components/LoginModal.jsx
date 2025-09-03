import React, { useContext, useState } from 'react'
import { authContext } from '../contexts/AuthContexts'

const LoginModal = () => {
    const { openLoginModal, login, submitting } = useContext(authContext)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        login(formData)
    }
    return openLoginModal && (
        <div style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div className="signin-container">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="joe@dev.com" id="email" name="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="*******" id="password" name="password" />
                    </div>

                    <button disabled={submitting}>{submitting ? "processing.." : "Login"}</button>
                </form>
                <p>Are you new here? <a href="./signup">Create Account</a></p>
            </div>
        </div>
    )
}

export default LoginModal