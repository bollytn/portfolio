import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'

export default function Contact() {
  return (
    <section id='contact' className='contact'>
      <PageHeaderContent headerText='mon contact'
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  )
}
