'use client'

import Runing from './googleai';
import React, { useEffect, useState } from 'react';

function GoogleAiSummary({ question }) {
    const [text, setText] = useState('-Searching-');

    const summarize = `Summarize whole content ${question}`

    useEffect(() => {
        Runing(summarize).then(setText);
    }, [summarize]);

    return (
        <div>
        <div className='font-bold'>question : {`summarized content for ${question}`}</div>
        <br/>
        <div>explanation : {text}</div>
        </div>
    );
}

export default GoogleAiSummary;