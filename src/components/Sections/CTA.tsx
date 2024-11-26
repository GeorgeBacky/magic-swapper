import React from 'react'
import { Button } from '../ui/button'

const CTA = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-primary">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Experience the Magic?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Join thousands of traders who have already discovered the power of MagicSwapper. Start swapping tokens with ease today!
                </p>
                <Button size="lg" variant="primary">Swap Now</Button>
            </div>
        </section>
    )
}

export default CTA