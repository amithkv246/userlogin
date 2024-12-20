import React, { useEffect, useState } from "react";
import TextInput from "../../components/textInput";
import Button from "../../components/button";

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isEmailValid, setisEmailValid] = useState(true)

    function handlelogin() {
        alert(`Email: ${email}, Password: ${password}`)
    }
    // alert(email.length)
    useEffect(() => {
        console.log("useEffect triggered")
        const emailregexp=/^[a-z][a-zA-Z0-9-_.]{0,}@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
        if (!emailregexp.test(email) && email.length !== 0) {
            setisEmailValid(false)
        }else {
            setisEmailValid(true)
        }
        const passregexp=/^ [a-zA-Z0-9]{8}

    },[email, password])

    // useEffect(() => {
    //     console.log("useEffect triggered")
    //     const emailregexp=/^[a-z][a-zA-Z0-9-_.]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/ 
    //     if(emailregexp.test(email)) {
    //         console.log("Valid email")
    //     }else {
    //         console.log("Invalid email")
    //     }

    //     if (password.length<=7) {
    //         console.log("The password is too short")
    //     }
    // },[email, password])

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#eee", height: "100svh" }}>
                <div className="bg-light w-25 p-3 text-center rounded-3" style={{ boxShadow: "0px 0px 10px 5px #aaa" }}>
                    <p className="fs-3 fw-semibold text-primary">Login</p>
                    <TextInput type={"email"} placeholder={"example@gmail.com"} onChange={(e) => setEmail(e.target.value)} />
                    {
                        !isEmailValid &&
                        <p className="text-danger" style={{fontSize: "small"}}>Email is invalid</p>
                    }
                    <TextInput type={"password"} placeholder={"********"} onChange={(e) => setPassword(e.target.value)}/>
                    <Button label={"Login"} onClick={handlelogin}/>
                    <p style={{ fontSize: "small" }}>Don't have an account? <span className="text-primary">Create an account</span></p>
                </div>
            </div>
        </React.Fragment>
    )
}
