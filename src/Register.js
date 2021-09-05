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
	const [contactNo,setContactNo] = useState(" ")

	const handleSubmit = (e) =>{
		e.preventDefault();
		console.log(firstName,lastName,email,state,pincode,city,locality,houseName,flatNo)
	}

	const handleChange = () =>{
		alert("Thank you for your Registration");
	}

	return(
		<div className = 'center'>
		<div className = "container3">
		<div className = "card3">
		<h2>Registration form</h2>
		<form onSubmit = {handleSubmit}>
		<div className = 'inputBox'>
		<label htmlFor = 'firstName'>FirstName: </label>
		<input type = 'text' 
		id = 'firstName' 
		name = 'firstName' 
		value = {firstName} 
		onChange = {(e)=>setFirstName(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'lastName'>LastName: </label>
		<input type = 'text' 
		id = 'lastName' 
		name = 'lastName' 
		value = {lastName} 
		onChange = {(e)=>setLastName(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'contactNo'>Contact no: </label>
		<input type = 'number' 
		id = 'contactNo' 
		name = 'contactNo' 
		value = {contactNo} 
		onChange = {(e)=>setContactNo(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'email'>Email: </label>
		<input type = 'email' 
		id = 'email' 
		name = 'email' 
		value = {email} 
		onChange = {(e)=>setEmail(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'state'>State: </label>
		<input type = 'text' 
		id = 'state' 
		name = 'state' 
		value = {state} 
		onChange = {(e)=>setState(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'pincode'>Pincode: </label>
		<input type = 'number' 
		id = 'pincode' 
		name = 'pincode' 
		value = {pincode} 
		onChange = {(e)=>setPincode(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'city'>City: </label>
		<input type = 'text' 
		id = 'city' 
		name = 'city' 
		value = {city} 
		onChange = {(e)=>setCity(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'locality'>Locality: </label>
		<input type = 'text' 
		id = 'locality' 
		name = 'locality' 
		value = {locality} 
		onChange = {(e)=>setLocality(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'houseName'>HouseName: </label>
		<input type = 'text' 
		id = 'houseName' 
		name = 'houseName' 
		value = {houseName} 
		onChange = {(e)=>setHouseName(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'flatNo'>FlatNo: </label>
		<input type = 'text' 
		id = 'flatNo' 
		name = 'flatNo' 
		value = {flatNo} 
		onChange = {(e)=>setFlatNo(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'password'>Password: </label>
		<input type = 'password' 
		id = 'password' 
		name = 'password' 
		value = {password} 
		onChange = {(e)=>setPassword(e.target.value)} />
		</div>
		<div className = "inputBox">
		<button type = 'submit' onClick = {handleChange}><Link className = 'underline' to = "/Donate" ><p className = 'light'>Register</p>
		</Link></button></div>
		</form>
		</div>
		</div>
		</div>
		)
}

export default Register;
