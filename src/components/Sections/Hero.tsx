import React from 'react'
import { Button } from '../ui/button'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
            <div className="container mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
                    Swap Tokens with Magic
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    MagicSwapper is the fastest, most secure, and user-friendly decentralized exchange for all your token swapping needs.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-pink-600 hover:to-purple-600 text-white">
                        Start Swapping Now
                    </Button>
                    <ArrowDown className="animate-bounce text-white" size={24} />
                </div>
            </div>
        </section>
    )
}

export default Hero