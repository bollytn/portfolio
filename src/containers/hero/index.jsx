import React, { useEffect } from 'react'
import './styles.scss'
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import { FiArrowRight } from "react-icons/fi";

import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

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
            <Canvas className='canvas-container'>
                <Stars radius={50} count={2500} factor={4} fade speed={2} />
            </Canvas>
            <motion.div className='container'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}

            >
                <span className='badge'>salut,je suis Mahjoubi BILEL</span>
                <h1 class="title">Développeur Full-Stack</h1>
                <p class="description">
                    Web,Mobile,Front-end,Back-end,designer,je suis un développeur full-stack passionné par la technologie et le design.
                </p>
                <motion.button className='btn'
                    initial={{ y: -250 }}
                    animate={{ y: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whiteTap={{ scale: 0.9 }}
                    transition={{
                        type: "spring",
                        duration: 0.6,
                        bounce: 0.3,
                        stiffness: 400,
                        damping: 10,
                    }}

                    style={{ border, boxShadow }}
                >
                    Téélécharger mon CV
                    <FiArrowRight className='icon' size={25} />
                </motion.button>

            </motion.div>

        </motion.div>
    )
}
