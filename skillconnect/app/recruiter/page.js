import React from 'react'
import Datadisplay1 from '@/components/data-displays/data-display1'
import Testimonials1 from '@/components/testimonials/Testimonials1'
import Cta1 from '@/components/CTA Sections/cta1'
import Cta2 from '@/components/CTA Sections/cta2'
import SectionHeader1 from '@/components/headers/section-header1'
import Heroes3 from '@/components/heroes/Heroes3'

const page = () => {
  return (
    <div>
        <Heroes3/>
        <SectionHeader1/>
        <Datadisplay1/>
        <Testimonials1 />
        <Cta2/>
        <Cta1/>
    </div>
  )
}

export default page