import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'

export default function Portfolio() {
  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent headerText='Mon Portfolio'
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  )
}
