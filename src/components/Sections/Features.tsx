import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Lock, Coins, BarChart } from 'lucide-react'

const features = [
    {
        title: 'Lightning Fast Swaps',
        description: 'Execute trades in seconds with our optimized smart contracts.',
        icon: Zap,
    },
    {
        title: 'Bank-Grade Security',
        description: 'Your assets are protected by state-of-the-art security measures.',
        icon: Lock,
    },
    {
        title: 'Multi-Chain Support',
        description: 'Swap tokens across multiple blockchains seamlessly.',
        icon: Coins,
    },
    {
        title: 'Advanced Analytics',
        description: 'Get insights into your trading activity with detailed analytics.',
        icon: BarChart,
    },
]
const Features = () => {
    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose MagicSwapper?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <feature.icon className="w-10 h-10 text-primary mb-2" />
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{feature.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features