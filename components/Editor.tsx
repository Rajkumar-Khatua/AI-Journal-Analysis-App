'use client'
import React from 'react'

type Props = {
    entry: any
}

function Editor({ entry }: Props) {
    return (
        <div className="p-8 bg-zinc-300/30 h-full">
            <h3 className="text-3xl font-bold mb-8">Edit your journal entry</h3>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        defaultValue={entry.title}
                    />
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded mt-4"
                        defaultValue={entry.content}
                    />
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Editor
