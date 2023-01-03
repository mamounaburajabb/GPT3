import React from 'react'
import { Feature } from '../../components'
import './whatGPT.css'
const WhatGPT = () => {
  return (
    <div className='gpt3-whatGPT3 section-margin' id='whatGPT3'>
      <div className='gpt3-whatGPT3-feature'>
        <Feature
          title="What is GPT3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className='gpt3-whatGPT3-heading'>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3-whatGPT3-container">
        <Feature
          title="Chat bots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature
          title="Knowledge base"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  )
}

export default WhatGPT