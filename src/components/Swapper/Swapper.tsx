'use client'
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../ui/select'
import { ArrowDownUp } from 'lucide-react'

const Swapper = () => {

    const [fromToken, setFromToken] = useState("ETH")
    const [toToken, setToToken] = useState("MAGIC")

    const handleSwap = () => {
        console.log(`Swapping ${fromToken} to ${toToken}`)
    }

    return (
        <section className="pb-20">
            <div className="container mx-auto">
                <Card className="w-full max-w-md mx-auto bg-muted shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center text-primary">Swap Tokens</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="from-amount" className="text-md text-primary mb-1">From</label>
                                <div className="flex space-x-2">
                                    <Input id="from-amount" type="text" placeholder="0.0" className="text-primary" />
                                    <Select value={fromToken} onValueChange={setFromToken}>
                                        <SelectTrigger className="w-[120px]  text-primary">
                                            <SelectValue placeholder="Select token" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ETH">ETH</SelectItem>
                                            <SelectItem value="BTC">BTC</SelectItem>
                                            <SelectItem value="USDT">USDT</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Button variant="ghost" size="icon" className="rounded-full bg-primary text-muted" onClick={() => {
                                    setFromToken(toToken)
                                    setToToken(fromToken)
                                }}>
                                    <ArrowDownUp className="h-6 w-6" />
                                </Button>
                            </div>
                            <div>
                                <label htmlFor="to-amount" className="text-md text-primary mb-1">To</label>
                                <div className="flex space-x-2">
                                    <Input id="to-amount" type="number" placeholder="0.0" className="text-primary" readOnly />
                                    <Select value={toToken} onValueChange={setToToken}>
                                        <SelectTrigger className="w-[120px] text-primary">
                                            <SelectValue placeholder="Select token" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="MAGIC">MAGIC</SelectItem>
                                            <SelectItem value="ETH">ETH</SelectItem>
                                            <SelectItem value="BTC">BTC</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="text-md text-primary">
                                <p>Exchange Rate: 1 {fromToken} = X {toToken}</p>
                                <p>Slippage Tolerance: 0.5%</p>
                            </div>
                            <Button onClick={handleSwap} className="w-full text-white font-bold py-2 px-4">
                                Swap Tokens
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Swapper