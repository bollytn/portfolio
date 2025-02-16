import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'

export default function Resume() {
  return (
    <section id='resume' className='resume'>
      <PageHeaderContent headerText='Mon CV'
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  )
}
