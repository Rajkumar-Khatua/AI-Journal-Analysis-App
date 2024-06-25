import EntryCard from '@/components/JEntryCard'
import JNewEntryCard from '@/components/JNewEntryCard'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
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
        <div className="p-8">
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
                    <EntryCard key={entry.id} entry={entry} />
                ))}
            </div>
        </div>
    )
}

export default Journal
