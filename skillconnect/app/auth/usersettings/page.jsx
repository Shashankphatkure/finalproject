import Profileediting from '@/components/forms/Profileediting'
import Pageheadings1 from '@/components/page-headings/Pageheadings1'
import React from 'react'

const page = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Pageheadings1 />
            
            <div style={{ marginBottom: '40px' }}></div>
            
            <Profileediting />
        </div>
    )
}

export default page