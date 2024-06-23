'use client'

import { useEffect, useState } from 'react'

const LoadingScreen = () => {
    const [loadingQuotes, setLoadingQuotes] = useState([
        'Loading the journey...',
        'Embrace the wait, greatness awaits.',
        'Patience is the companion of wisdom.',
        "Hold on tight, we're almost there.",
        "In every delay, there's a message.",
        'Keep calm and wait a little longer.',
        'The journey is just as important as the destination.',
        'Good things come to those who wait.'
    ])
    const [quote, setQuote] = useState('')
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * loadingQuotes.length)
        setQuote(loadingQuotes[randomIndex])
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-white"></div>
            <p className="text-lg mt-4">{quote}</p>
        </div>
    )
}

export default LoadingScreen
