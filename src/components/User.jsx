import React, {useState} from 'react'

const User = ()=> {
    const [fName,setFName] = useState("")
    const [lName,setLName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input onChange= {(event)=>setFName(event.target.value)} type="text" name="" id="" className="formcontrol" />
                    {fName.length < 2 || fName.length > 20 ?
                    <p className="text-danger">First name must be between 2 and 30 characters</p>:
                    ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input onChange= {(event)=>setLName(event.target.value)} type="text" name="" id="" className="formcontrol" />
                    {lName.length < 2 || lName.length > 20 ?
                    <p className="text-danger">Last name must be between 2 and 30 characters</p>:
                    ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input onChange= {(event)=>setEmail(event.target.value)} type="text" name="" id="" className="formcontrol" />
                    {email.length < 5?
                    <p className="text-danger">Email must be at least 5 characters</p>:
                    ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input onChange= {(event)=>setPassword(event.target.value)} type="text" name="" id="" className="formcontrol" />
                    {password.length < 8?
                    <p className="text-danger">Password must be at least 8 characters</p>:
                    ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password:</label>
                    <input onChange= {(event)=>setConfirmPassword(event.target.value)} type="text" name="" id="" className="formcontrol" />
                    {confirmPassword.length < 8?
                    <p className="text-danger">Password must be at least 8 characters</p>:
                    ""
                    }
                </div>
                <input type="submit" value="Submit" />
            </form>
            <hr />
            <h3>First Name: {fName}</h3>
            <h3>Last Name: {lName}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
            <h3>Confirm Password: {confirmPassword}</h3>



        </div>
    )
}

export default User
