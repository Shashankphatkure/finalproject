'use client'

import Runing from './googleai';
import React, { useEffect, useState } from 'react';

function GoogleAiCheck({ question }) {
    const [text, setText] = useState('-Searching-');

    useEffect(() => {
        Runing(question).then(setText);
    }, [question]);

    return (
        <div>
        <div className='font-bold'>question : {question}</div>
        <br/>
        <div>explanation : {text}</div>
        </div>
    );
}

export default GoogleAiCheck;