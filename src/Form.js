import React, { useState } from "react";

const Form = () => {

    const [fullName, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setmessage] = useState("")
    const [messageType, setMessageType] = useState("")
    const addDataHandler = () => {
        if (fullName === "") {
            setTimeout(() => {
                setmessage("")
            }, 1000);
            setmessage("full name required!")
            // alert("name required!")
            setMessageType("error")
        } else if (email === "") {
            setTimeout(() => {
                setmessage("")
            }, 1000);
            setmessage("email required!")
            // alert("email  required!")
            setMessageType("error")
        } else if (password === "") {
            setTimeout(() => {
                setmessage("")
            }, 1000);
            setmessage("password required!")
            // alert("password required!")
            setMessageType("error")
        } else {
            const users = {
                name:fullName,
                email:email,
                password:password,
            }
            console.log(users)
            setmessage("success")
            setMessageType("success")
            // console.log(fullName)
            // console.log(email)
            // console.log(password)
            setName("")
            setEmail("")
            setPassword("")
            // setmessage("")
            setTimeout(() => {
                setmessage("")
            }, 1000);
        }
    }
    return (

        <div>
            <input type="text" placeholder="Name" value={fullName} onChange={(data) => setName(data.target.value)} /> <br />
            <input type="email" placeholder="Email Address" value={email} onChange={(data) => setEmail(data.target.value)} /><br />
            <input type="password" placeholder="password" value={password} onChange={(data) => setPassword(data.target.value)} /><br />
            <button onClick={addDataHandler}>Submit</button>
            <p style={{ color: messageType === "error"?"red" :"green"}}>{message}</p>
        </div>
    )
}
export default Form