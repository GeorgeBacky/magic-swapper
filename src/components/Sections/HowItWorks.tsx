import React from 'react'
import { Button } from '../ui/button'
import { Wallet, ArrowRight, CheckCircle, RefreshCw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'

const steps = [
    {
        number: '01',
        title: 'Connect Your Wallet',
        description: 'Link your preferred crypto wallet to MagicSwapper.',
        icon: Wallet,
    },
    {
        number: '02',
        title: 'Choose Your Tokens',
        description: 'Select the tokens you want to swap from our wide range of supported assets.',
        icon: ArrowRight,
    },
    {
        number: '03',
        title: 'Review & Confirm',
        description: 'Double-check the swap details and confirm the transaction.',
        icon: CheckCircle,
    },
    {
        number: '04',
        title: 'Magic Happens',
        description: 'Sit back and watch as your tokens are swapped instantly!',
        icon: RefreshCw,
    },
]

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">How MagicSwapper Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {steps.map((step, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <step.icon className="w-10 h-10 text-primary mb-2" />
                                <CardTitle>{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{step.description}</CardDescription>
                            </CardContent>
                        </Card>
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