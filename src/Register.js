import React, {useState} from 'react'
import {Link} from "react-router-dom"

function Register(){
	const [firstName,setFirstName] = useState(" ")
	const [lastName,setLastName] = useState(" ")
	const [email,setEmail] = useState(" ")
	const [state,setState] = useState(" ")
	const [pincode,setPincode] = useState(" ")
	const [city,setCity] = useState(" ")
	const [locality,setLocality] = useState(" ")
	const [houseName,setHouseName] = useState(" ")
	const [flatNo,setFlatNo] = useState(" ")
	const [password,setPassword] = useState(" ")

	const handleSubmit = (e) =>{
		e.preventDefault();
		console.log(firstName,lastName,email,state,pincode,city,locality,houseName,flatNo)
	}

	return(
		<div className = 'center'>
		<form className = 'form' onSubmit = {handleSubmit}>
		<div className = 'form-control'>
		<label htmlFor = 'firstName'>FirstName: </label>
		<input type = 'text' 
		id = 'firstName' 
		name = 'firstName' 
		value = {firstName} 
		onChange = {(e)=>setFirstName(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'lastName'>LastName: </label>
		<input type = 'text' 
		id = 'lastName' 
		name = 'lastName' 
		value = {lastName} 
		onChange = {(e)=>setLastName(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'email'>Email: </label>
		<input type = 'email' 
		id = 'email' 
		name = 'email' 
		value = {email} 
		onChange = {(e)=>setEmail(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'state'>State: </label>
		<input type = 'text' 
		id = 'state' 
		name = 'state' 
		value = {state} 
		onChange = {(e)=>setState(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'pincode'>Pincode: </label>
		<input type = 'number' 
		id = 'pincode' 
		name = 'pincode' 
		value = {pincode} 
		onChange = {(e)=>setPincode(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'city'>City: </label>
		<input type = 'text' 
		id = 'city' 
		name = 'city' 
		value = {city} 
		onChange = {(e)=>setCity(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'locality'>Locality: </label>
		<input type = 'text' 
		id = 'locality' 
		name = 'locality' 
		value = {locality} 
		onChange = {(e)=>setLocality(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'houseName'>HouseName: </label>
		<input type = 'text' 
		id = 'houseName' 
		name = 'houseName' 
		value = {houseName} 
		onChange = {(e)=>setHouseName(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'flatNo'>FlatNo: </label>
		<input type = 'text' 
		id = 'flatNo' 
		name = 'flatNo' 
		value = {flatNo} 
		onChange = {(e)=>setFlatNo(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'password'>Password: </label>
		<input type = 'password' 
		id = 'password' 
		name = 'password' 
		value = {password} 
		onChange = {(e)=>setPassword(e.target.value)} />
		</div>
		<button type = 'submit'><Link className = 'underline' to = "/Donate"><p className = 'light'>Register</p>
		</Link></button>
		</form>
		</div>
		)
}

export default Register;