import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'

export default function Skills() {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent headerText='Mes Compétences'
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  )
}
