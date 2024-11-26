import React from 'react'
import { Button } from '../ui/button'

const steps = [
    {
        number: '01',
        title: 'Connect Your Wallet',
        description: 'Link your preferred crypto wallet to MagicSwapper.',
    },
    {
        number: '02',
        title: 'Choose Your Tokens',
        description: 'Select the tokens you want to swap from our wide range of supported assets.',
    },
    {
        number: '03',
        title: 'Review & Confirm',
        description: 'Double-check the swap details and confirm the transaction.',
    },
    {
        number: '04',
        title: 'Magic Happens',
        description: 'Sit back and watch as your tokens are swapped instantly!',
    },
]

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">How MagicSwapper Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Button size="lg">Get Started Now</Button>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks