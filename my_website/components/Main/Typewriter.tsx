'use client'

import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const TypingEffect = () => {
 return (
  <>
   <br></br>
   <h1 className='text-3xl  font-extrabold sm:text-4xl md:text-5xl'>
    <TypewriterComponent
     options={{
      loop: true,
     }}
     onInit={(typewriter) => {
      typewriter
       .pasteString('> I am a ', null)
       .typeString('Software Developer')
       .pauseFor(1500)
       .deleteChars('Software Developer'.length)
       .typeString('Researcher')
       .pauseFor(1500)
       .deleteChars('Researcher'.length)
       .typeString('Musician')
       .pauseFor(1500)
       .deleteChars('Musician'.length)
       .start()
     }}
    />
   </h1>
   <br></br>
  </>
 )
}

export default TypingEffect
