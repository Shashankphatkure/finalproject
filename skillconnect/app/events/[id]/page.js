import GoogleAiExplain from '@/components/googleai/googleaikidexplanation'
import GoogleAiCheck from '@/components/googleai/googleairesponse'
import GoogleAiSummary from '@/components/googleai/googleaisummary'
import GoogleAiTranslate from '@/components/googleai/googleaitranslate'
import React from 'react'

const page = () => {
  return (
    
    <div className="m-10 p-5">
    
    <GoogleAiCheck question="javascript array and objects" />

    <br/>

    <GoogleAiExplain question="javascript array and objects" />
             
    <br/>         

    <GoogleAiSummary question="javascript array and objects" />
         
    <br/> 

    <GoogleAiTranslate question="javascript array and objects" />

    </div>
  )
}

export default page