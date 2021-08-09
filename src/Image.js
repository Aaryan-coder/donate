import React,{useState,useEffect} from 'react'
import data from './data'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Image(){
	const [index,setIndex] = useState(0)
	const {id,image} = data[index]
	const checkNumber = (number) =>{
		if(number>data.length-1){
			return 0;
		}
		if(number<0){
			return data.length - 1
		}
		return number
	}
	const onDecrease = () =>{
		setIndex((index)=>{
			let newNumber = index - 1;
			return checkNumber(newNumber)
		})
	}
	const onIncrease = () =>{
		setIndex((index)=>{
			let newNumber = index + 1;
			return checkNumber(newNumber)
		})
	}
	useEffect(()=>{
		let slider = setInterval(()=>{
			setIndex(checkNumber(index+1))
		},3000);
		return () => clearInterval(slider)
	},[index])
	return(
		<div className  = "container" key = {id} >
			<img src = {image} alt = 'donation' className = "cover"  />
			<button onClick = {onDecrease} className = "arrow-left">
			<AiOutlineArrowLeft  />
			</button>
			<button onClick = {onIncrease} className = "arrow-right" >
			<AiOutlineArrowRight  />
			</button>
        	<h1 className = "bottom-left"><strong>Donate!</strong></h1>
		</div>
		)
}

export default Image;