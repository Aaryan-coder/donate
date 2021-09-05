import React, {useState} from 'react';
import {Link} from "react-router-dom"

function Locality(){
	const [state,setState] = useState(" ")
	const [pincode,setPincode] = useState(" ")
	const [city,setCity] = useState(" ")
	const [locality, setLocality] = useState(" -")
const handleSubmit = (e) =>{
		e.preventDefault();
		console.log(state,pincode,city,locality)
	}

	return(
		<div className = 'center'>
		<h1 className = 'dark'>Please enter your location</h1>
		<div className = 'buffer'></div>
		<div className = "container7">
		<div className = "card7">
		<form onSubmit = {handleSubmit}>
		
		<div className = 'inputBox'>
		<label htmlFor = 'state'>State: </label>
		<input type = 'text' 
		id = 'state' 
		name = 'state' 
		value = {state} 
		onChange = {(e)=>setState(e.target.value)} />
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
		<label htmlFor = 'pincode'>Pincode: </label>
		<input type = 'number' 
		id = 'pincode' 
		name = 'pincode' 
		value = {pincode} 
		onChange = {(e)=>setPincode(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'locality'>Locality: </label>
		<input type = 'text' 
		id = 'locality' 
		name = 'locality' 
		value = {locality} 
		onChange = {(e)=>setLocality(e.target.value)} />
		</div>
		<div className = "inputBox">
		<button type = 'submit'><Link className = 'underline' to = "/Search" ><p className = 'light'>Submit</p>
		</Link></button></div>
		</form>
		</div>
		</div>
		</div>
		)
}

export default Locality;