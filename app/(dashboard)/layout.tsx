import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'

const DashboardLayout = async ({ children }) => {
    const user = await currentUser()
    // console.log(user)
    return (
        <div className="h-screen w-screen relative">
            <aside
                className="
                w-64
                bg-gray-900
                text-gray-100
                flex flex-col
                fixed
                h-full
                overflow-y-auto
                z-10
                shadow-lg
                borer-r
                border-gray-800/10
            "
            >
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
                <nav className="flex-1">
                    <ul
                        className="
                        flex
                        flex-col
                        space-y-1
                        cursor-pointer

                    "
                    >
                        <Link
                            href="/journal"
                            className="p-4 hover:bg-gray-800 transition-all"
                        >
                            Journal
                        </Link>
                        <Link
                            href="/settings"
                            className="p-4 hover:bg-gray-800 transition-all"
                        >
                            Settings
                        </Link>
                    </ul>
                </nav>
            </aside>
            <div
                className="
                ml-64
                h-full
            "
            >
                <header
                    className="
                    h-[64px]
                bg-gray-900
                    shadow
                    flex
                    items-center
                    justify-between
                    px-4
                    border-b
                    border-gray-100
                "
                >
                    <Link
                        href="/"
                        className="
                            text-xl
                            font-bold
                            tracking-wider
                            transition-all
                            duration-200
                            text-white
                            ease-in-out
                            hover:text-gray-800
                            "
                    >
                        Moody
                    </Link>
                    <div className="p-2 flex items-center justify-center gap-2">
                        <span
                            className="
                            text-gray-200/80
                            transition-all
                            duration-200
                            ease-in-out
                            hover:text-gray-600
                            cursor-pointer
                            "
                        >
                            Nice to see you, {user?.firstName}
                        </span>
                        <UserButton />
                    </div>
                </header>
                <main className="p-4 h-[calc(100vh-60px)] ">{children}</main>
            </div>
        </div>
    )
}

export default DashboardLayout
