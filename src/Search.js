import React from 'react';
import {Link} from "react-router-dom"

function Search(){
	return(
		<div className = 'donation'>
		<h2>Thank you for Logging in.</h2>
		<h2>We welcome you to our campaign.</h2>
		<br />
		<hr />
			<h1>What would you like to search?</h1>
			<br />
			<button type = "button" className = 'left-btn' ><Link className ='underline' to = "/Cloth_details" ><div className = 'bright'>Clothes</div></Link></button>
			<button type = "button" className = 'right-btn'><Link className ='underline' to = "/Food_details" ><div className = 'bright'>Food</div></Link></button>
			<br />
			
		</div>
		)
}

export default Search;