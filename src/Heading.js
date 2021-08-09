import React from 'react';
import {Link} from "react-router-dom"

function Heading(){
	return(
		<nav>
			<div className="zone blue sticky">
		    	<ul className = "main-nav">
		    	<Link className = 'underline' to = "/Home">
		    		<li>Home</li>
		    		</Link>
		    		<Link className = 'underline' to = "/About">
		    		<li>About</li>
		    		</Link>
		    		<Link className = 'underline' to = "/Team">
  					<li>Our Team</li>
  					</Link>
  					<Link className = 'underline' to = "/Donate">
  					<li>Donate</li>
  					</Link>
  					<Link className = 'underline' to = "/Find">
  					<li>Find</li>
  					</Link>
  					<Link className = 'underline' to = "/FAQ">
  					<li>FAQ</li>
  					</Link>
  					<Link className = 'push' to = "/Contact">
  					<li >Contact</li>
  					</Link>
  					<Link className = 'underline' to = "/Admin">
  					<li>Admin</li>
  					</Link>
  				</ul>
  			</div>
		</nav>
		)
}

export default Heading;

