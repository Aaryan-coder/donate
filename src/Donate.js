import React, {useState} from 'react'
import {Link} from "react-router-dom"

function Donate(){
	const [username,setUsername] = useState(" ")
	const [password,setPassword] = useState(" ")

	const handleSubmit = (e) =>{
		e.preventDefault();
		console.log(username)
	}

	return(
		<div className = 'center'>
		<h1 className = 'dark'>Please login to Donate.</h1>
		<div className = 'buffer'></div>
		<form className = 'form' onSubmit = {handleSubmit}>
		<div className = 'form-control'>
		<label htmlFor = 'username'>Username: </label>
		<input type = 'text' 
		id = 'username' 
		name = 'username' 
		value = {username} 
		onChange = {(e)=>setUsername(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'password'>Password: </label>
		<input type = 'password' 
		id = 'password' 
		name = 'password' 
		value = {password} 
		onChange = {(e)=>setPassword(e.target.value)} />
		</div>
		<button type = 'submit'  ><Link className = 'underline' to = '/Donation'><p className = 'color'>Login</p></Link></button>
		<div className = 'break'></div>
		<p>Not yet Registered?</p>
		<Link className = 'underline' to = "/Register"><p className = 'bright'>Register here</p></Link>
		</form>
		</div>
		)
}

export default Donate;