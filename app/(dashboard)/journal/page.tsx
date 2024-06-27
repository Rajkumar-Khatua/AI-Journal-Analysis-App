import EntryCard from '@/components/JEntryCard'
import JNewEntryCard from '@/components/JNewEntryCard'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import Link from 'next/link'
import React from 'react'

const getEntries = async () => {
    // Fetch the journal entries from the database
    const user = await getUserByClerkID()
    const entries = await prisma.journalEntry.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return entries
}
const Journal = async () => {
    const entries = await getEntries()
    console.log(entries)
    return (
        // Display the journal entries
        <div className="p-8 bg-zinc-300/30 h-full">
            <h3 className="text-3xl font-bold mb-8">
                Here are your journal entries so far
            </h3>
            <div
                className="
            grid
            grid-cols-3
        gap-4
        "
            >
                <JNewEntryCard />
                {entries.map((entry) => (
                    <Link href={`/journal/${entry.id}`} key={entry.id}>
                        <EntryCard key={entry.id} entry={entry} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Journal
