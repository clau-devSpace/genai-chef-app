import React from 'react'
import Markdown from 'react-markdown'

export default function generateRecipe(props){
  return(
    <div className='recipe-container'>
      <Markdown>{props.recipe}</Markdown>
  </div>
  )
 
}