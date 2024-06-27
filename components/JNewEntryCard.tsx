'use client'

import { createNewEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'

const JNewEntryCard = () => {
    const router = useRouter()

    const handleOnClick = async () => {
        const data = await createNewEntry()
        router.push(`/journal/${data.id}`)
    }
    return (
        <div
            className="
            bg-white
            p-4
            rounded-md
            shadow-md
            flex
            items-center
            justify-center
            text-center
            cursor-pointer
            hover:shadow-lg
        "
        >
            <div
                className="
                px-4
                py-5
                sm:p-6
            "
                onClick={handleOnClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </div>
        </div>
    )
}

export default JNewEntryCard
