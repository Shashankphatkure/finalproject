'use client'

import Runing from './googleai';
import React, { useEffect, useState } from 'react';

function GoogleAiTranslate({ question }) {
    const [text, setText] = useState('-Translating-');

    const translate = `Translate to hindi ${question}`

    useEffect(() => {
        Runing(translate).then(setText);
    }, [translate]);

    return (
        <div>
        <div className='font-bold'>question : {`Translation in hindi for ${question}`}</div>
        <br/>
        <div>explanation : {text}</div>
        </div>
    );
}

export default GoogleAiTranslate;