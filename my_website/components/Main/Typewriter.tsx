'use client'

import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const TypingEffect = () => {
  return (
    <> 
      <br></br>
      <h1 className='text-3xl  sm:text-4xl md:text-5xl font-extrabold'> 
        <TypewriterComponent options = {{
        loop : true,
        }}
      
        onInit={(typewriter) => {
          typewriter.pasteString('> I am a ', null)
            .typeString('Software Developer')
            .pauseFor(1500)
            .deleteChars(18)
            .typeString('Musician')
            .pauseFor(1500)
            .deleteChars(8)
            .typeString('Researcher')
            .pauseFor(1500)
            .deleteChars(10)
            .start();
        }}
      />
      </h1>
      <br></br>
    </>
  );
};

export default TypingEffect;