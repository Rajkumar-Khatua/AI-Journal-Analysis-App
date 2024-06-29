const createURL = (path) => {
    return window.location.origin + path
}

export const createNewEntry = async () => {
    const response = await fetch(createURL('/api/journal'), {
        method: 'POST'
    })
    if (response.ok) {
        const data = await response.json()
        return data.data
    }
}

export const updateEntry = async (id, updates) => {
    const res = await fetch(
        new Request(createURL(`/api/journal/${id}`), {
            method: 'PATCH',
            body: JSON.stringify({ updates })
        })
    )

    if (res.ok) {
        return res.json()
    } else {
        throw new Error(
            `Failed to update journal entry with id: ${id}. Error: ${res.statusText}`
        )
    }
    
}
