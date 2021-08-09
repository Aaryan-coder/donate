import React,{useState} from 'react';

function Clothes(){
	const [number,setNumber] = useState('');
		const [size,setSize] = useState(' ');
		const [quantity,setQuantity] = useState(" ");

	const handleSubmit = (e) =>{
		e.preventDefault();
		console.log("Hello world")
	}
	return(
		<div className = "clothes">
			<h1>Clothes Details</h1>
			<div className = 'clothes-color'>
			<form className = 'form' onSubmit = {handleSubmit}>
		<div className = 'form-control'>
		<label htmlFor = 'Number'><strong>Donor Contact Number:</strong> </label>
		<input type = 'number' 
		id = 'number' 
		name = 'number' 
		value = {number} 
		onChange = {(e)=>setNumber(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'Gender'>
		<strong>Gender</strong>: <br />
		<br />
		<input type = "radio" name = "gender" value = "male" />Male<br />
		<input type = "radio" name = "gender" value = "female" />Female<br />
		<input type = "radio" name = "gender" value = "other" />Other<br /> </label>
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'size'><strong>Size: </strong></label>
		<input type = 'number' 
		id = 'size' 
		name = 'size' 
		value = {size} 
		onChange = {(e)=>setSize(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'Cloth'>
		<strong>Type of Clothes: </strong><br />
		<br />
		<input type = "checkbox" name = "Cloth" value = "Shirt" />Shirt<br />
		<input type = "checkbox" name = "Cloth" value = "Pant" />Pant<br />
		<input type = "checkbox" name = "Cloth" value = "Saree" />Saree<br/> 
		<input type = "checkbox" name = "Cloth" value = "Sudithar" />Sudithar
		</label>
		<div className = 'form-control'>
		<strong>Other: </strong><input type = "text" id = "other" name = "other"  />
		</div>
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'Quantity'><strong>Quantity: </strong></label>
		<input type = 'text' 
		id = 'Quantity' 
		name = 'Quantity' 
		value = {quantity} 
		onChange = {(e)=>setQuantity(e.target.value)} />
		</div>
		<div className = 'form-control'>
		<label htmlFor = 'location'><strong>location: </strong></label>
		<input type = 'text' 
		id = 'location' 
		name = 'location'  />
		</div>
        <button type = 'submit'>Donate</button>
		</form>
		</div>
		</div>
		)
}

export default Clothes;