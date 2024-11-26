'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Mouse } from 'lucide-react'
import { motion } from 'framer-motion'


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 150
        }
    }
}

const Hero = () => {
    return (
        <motion.section
            className="py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 z-0"></div>
            <div className="container pt-10 mx-auto relative z-10">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-6"
                    variants={itemVariants}
                >
                    Swap Tokens with Magic
                </motion.h1>
                <motion.p
                    className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    MagicSwapper is the fastest, most secure, and user-friendly decentralized exchange for all your token swapping needs.
                </motion.p>
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4"
                    variants={itemVariants}
                >
                    <Button size="lg" className="button-gradient">
                        Start Swapping Now
                    </Button>
                    <Mouse className="animate-bounce text-foreground" size={24} />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Hero