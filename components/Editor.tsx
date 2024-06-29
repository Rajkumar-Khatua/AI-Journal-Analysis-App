'use client'
import React, { useState } from 'react'
import { useAutosave } from 'react-autosave'
import { updateEntry } from '@/utils/api'

type Props = {
    entry: any
}

function Editor({ entry }: Props) {
    const [value, setValue] = useState(entry.content)
    const [loading, setLoading] = useState(false)

    useAutosave({
        data: value,
        onSave: async (_value) => {
            if (_value === entry.content) return
            setLoading(true)

            const { data } = await updateEntry(entry.id, { content: _value })

            setValue(data)
            setLoading(false)
        }
    })

    return (
        <div className="p-8 bg-zinc-300/30 h-full">
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg">
                        <p className="text-lg font-bold">Saving...</p>
                    </div>
                </div>
            )}
            <h3 className="text-3xl font-bold mb-8">Edit your journal entry</h3>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3">
                    <textarea
                        className="
                        w-full
                        h-96
                        bg-zinc-300/30
                        p-4
                        text-lg
                        text-zinc-900
                        rounded-lg
                        focus:outline-none
                        focus:ring-2
                        focus:ring-zinc-500
                        focus:ring-opacity-50
                    "
                        placeholder="Write your journal entry here"
                        defaultValue={entry.content}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    ></textarea>
                </div>
                <button
                    className="
                    col-span-3
                    bg-zinc-500
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded-lg
                    hover:bg-zinc-600
                    transition
                    duration-200
                    ease-in-out
                "
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default Editor
