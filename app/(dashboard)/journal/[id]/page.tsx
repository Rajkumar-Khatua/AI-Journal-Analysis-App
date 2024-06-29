import Editor from '@/components/Editor'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntry = async (id) => {
    const user = await getUserByClerkID()
    const entry = await prisma.journalEntry.findUnique({
        where: {
            userId_id: {
                userId: user.id,
                id
            }
        }
    })

    return entry
}
const JournalEditorPage = async ({ params }) => {
    const entry = await getEntry(params.id)
    console.log('Entry: ', entry)

    return (
        <div
            className="
            h-screen
            w-screen
        "
        >
            <Editor entry={entry} />
        </div>
    )
}

export default JournalEditorPage
