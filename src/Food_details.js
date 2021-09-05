import React,{useState} from 'react';
import food_data from './food_data'
import Food_search from './Food_search'

function Food_details(){
	
	const [list,setList] = useState(food_data)
	const Library = () =>{
		return(
			<div>
		<div className = 'clothlist'>
		{list.map((food)=>{
		return(
			<Food_search key = {food.id} food = {food}  />
			)
	})}
	</div>
	</div>
	)}
	return(
		<Library />
	)
}

export default Food_details;