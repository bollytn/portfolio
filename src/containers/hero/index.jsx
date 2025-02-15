import React, { useEffect } from 'react'
import './styles.scss'
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import { FiArrowRight } from "react-icons/fi";

const COLORS = ["#94a70b", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Home() {

    const color = useMotionValue(COLORS[0])
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 5%, #020617 50% ,${color} )`

    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 5,
            repeat: Infinity,
            repeateType: 'mirror'
        })
    }, [color])

    return (
        <motion.div className='home' style={{ backgroundImage }}>
            <div className='container'>
            <span className='badge'>salut,je suis Mahjoubi BILEL</span>
            <h1 class="title">Développeur Full-Stack</h1>
            <p class="description">
                Web,Mobile,Front-end,Back-end,designer,je suis un développeur full-stack passionné par la technologie et le design.
            </p>
            <motion.button className='btn'
            whileHover={{scale:1.015,}}
            whiteTap={{scale:0.985,}}
            style={{border, boxShadow}}
            >
                Téélécharger mon CV
                <span class="icon">{FiArrowRight}</span>
            </motion.button>
            </div>
        </motion.div>
    )
}
