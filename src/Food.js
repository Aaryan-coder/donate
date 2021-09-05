import React,{useState} from 'react';

function Food(){
	const [number,setNumber] = useState('');
		const [quantity,setQuantity] = useState(" ");

	const handleSubmit = (e) =>{
		e.preventDefault();
		console.log("Hello world")
	}
	const handleChange = () =>{
		alert('Thank you for your Donation!')
	}
	return(
		<div>
		<div className = "clothes">
		<h1>Food Details</h1>
		</div>
			<div className = "container2">
		<div className = "card2">
			<form onSubmit = {handleSubmit}>
		<div className = 'inputBox'>
		<label htmlFor = 'Number'><strong>Donor Contact Number:</strong> </label>
		<input type = 'number' 
		id = 'number' 
		name = 'number' 
		value = {number} 
		onChange = {(e)=>setNumber(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'Type'>
		<strong>Type of Food: </strong><br />
		<input type = "checkbox" name = "Type" value = "Veg" />Veg<br />
		<input type = "checkbox" name = "Type" value = "Non Veg" />Non Veg<br />
		</label>
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'Quantity'><strong>Quantity(For people): </strong></label>
		<input type = 'text' 
		id = 'Quantity' 
		name = 'Quantity' 
		value = {quantity} 
		onChange = {(e)=>setQuantity(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'location'><strong>location: </strong></label>
		<input type = 'text' 
		id = 'location' 
		name = 'location'  />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'date'><strong>Date of availability: </strong></label>
		<input type = 'date' 
		id = 'Date' 
		name = 'Date'  />
		</div>
		<div className = "inputBox">
        <button type = 'submit' onClick = {handleChange}>Donate</button>
        </div>
		</form>
		</div>
		</div>
		</div>
		)
}

export default Food;