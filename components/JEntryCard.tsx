const EntryCard = ({ entry }) => {
    return (
        <div
            className="
            bg-white
            p-4
            rounded-lg
            shadow-md
            flex
            flex-col
            justify-between
            "
        >
            <div>
                <h4 className="text-xl font-bold">{entry.title}</h4>
                <p className="text-gray-500">{entry.content}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500 text-sm">
                    {new Date(entry.createdAt).toLocaleDateString()} at{' '}
                    {new Date(entry.createdAt).toLocaleTimeString()}
                </p>
                <button
                    className="
                    bg-zinc-500
                    text-white
                    px-4
                    py-2
                    rounded-md
                    hover:bg-zinc-600
                    "
                >
                    Edit
                </button>
            </div>
        </div>
    )
}

export default EntryCard
