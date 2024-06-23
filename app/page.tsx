import Link from 'next/link'
import { auth, currentUser } from '@clerk/nextjs/server'
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs'

export default async function Home() {
    const { userId } = await auth()
    const user = await currentUser()

    let ChangeRouteDynamic = userId ? '/journal' : '/new-user'

    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center text-white relative">
            <div className="absolute top-4 left-4 flex items-center space-x-4">
                <SignedIn>
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                userButton:
                                    'bg-gray-800 text-white rounded-full p-2 hover:shadow-lg transition duration-300 ease-in-out',
                                avatarBox: 'bg-white rounded-full'
                            }
                        }}
                    />
                </SignedIn>
                <SignedOut>
                    <Link href="/sign-in">
                        <button
                            className="
                                bg-gray-800
                                text-white
                                px-4
                                py-2
                                rounded-full
                                shadow-md
                                hover:bg-white
                                hover:text-black
                                transition
                                duration-300
                                ease-in-out
                            "
                        >
                            Sign In
                        </button>
                    </Link>
                </SignedOut>
            </div>
            <div
                className="
                w-full
                max-w-[600px]
                mx-auto
                mb-8
                 
                border-gray-700
                p-8
                rounded-lg
                shadow-lg
                transform
                transition
                duration-500
                ease-in-out
                hover:scale-105
            "
            >
                <h2
                    className="
                    text-2xl
                    font-bold
                    text-start
                    text-white/90
                    mb-4
                "
                >
                    Hey, {user?.firstName || 'there'}
                </h2>
                <h1
                    className="
                    text-4xl
                    font-bold
                    text-center
                    text-white
                    mb-4
                "
                >
                    The Journal for the Modern Gentleman 🎩
                </h1>
                <p
                    className="
                    text-center
                    text-white/60
                    text-lg
                    mt-4
                    mb-8
                "
                >
                    We are{' '}
                    <Link
                        href="/"
                        className="
                        text-white
                        underline
                        transition
                        duration-300
                        ease-in-out
                        font-bold
                        text-lg
                        hover:text-gray-400
                    "
                    >
                        Moody
                    </Link>{' '}
                    the journal for the modern gentleman. We cover everything
                    from fashion to food to travel. We are the go-to source for
                    the modern gentleman.&rsquo;
                </p>
                <div className="flex justify-center">
                    <Link href={ChangeRouteDynamic}>
                        <button
                            className="
                                bg-white
                                text-black
                                px-6
                                py-3
                                rounded-full
                                shadow-lg
                                hover:bg-gray-100
                                transition
                                duration-300
                                ease-in-out
                                transform
                                hover:scale-110
                            "
                        >
                            Let&rsquo;s Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
