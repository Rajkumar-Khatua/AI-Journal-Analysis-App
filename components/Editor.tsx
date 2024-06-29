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
            setLoading(true)
            const updated = await updateEntry(entry.id, { content: _value })
            setValue(updated.data.content)
            setLoading(false)
        }
    })

    return (
        <div className="p-8 bg-zinc-300/30 h-full">
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
                    resize-none
                "
                        placeholder="Write your journal entry here"
                        defaultValue={entry.content}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    ></textarea>
                </div>
                <button
                    className="
=                border
                border-gray-500/10
                text-gray-500
                font-bold
                py-2
                px-4
                rounded-lg
                transition
                duration-300
                ease-in-out
                cursor-not-allowed
            "
                >
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-3 text-zinc-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8V4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                            <span className="text-zinc-500">Saving...</span>
                        </div>
                    ) : (
                        'Auto-save enabled'
                    )}
                </button>
            </div>
        </div>
    )
}

export default Editor
