import React from 'react'
import questions from './questions_data'
import Question from './question';
import './FAQ.css'
function FAQ(){
	return(
		<main>
		<div className = 'box'>
		<section className = 'info'>
		{questions.map((data)=>{
			const {id,title,info} = data;
			return(
				<Question key = {id} title = {title} info = {info} />
				)
		})}
		</section>
		</div>
		</main>
		)
}
export default FAQ;