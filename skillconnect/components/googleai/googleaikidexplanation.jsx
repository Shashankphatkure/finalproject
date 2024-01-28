'use client'

import Runing from './googleai';
import React, { useEffect, useState } from 'react';

function GoogleAiExplain({ question }) {
    const [text, setText] = useState('-Searching-');

    const easyexplanation = `Explain in easy way like i was small for ${question}`

    useEffect(() => {
        Runing(easyexplanation).then(setText);
    }, [easyexplanation]);

    return (
        <div>
        <div className='font-bold'>question : {`Easy explanation for ${question}`}</div>
        <br/>
        <div>explanation : {text}</div>
        </div>
    );
}

export default GoogleAiExplain;