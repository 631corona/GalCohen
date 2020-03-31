export const getStatusNumber = (status) => {
    const statusDictionary = {
        'FAILED': 1,
        'IN_PROGRESS': 2,
        'SUCCESS': 3
    }
    return statusDictionary[status]
}

export const getStatusTitle = (status) => {
    const statusDictionary = {
        1: "FAILED",
        2: "PROGRESS",
        3: "SUCCESS"
    }
    return statusDictionary[status] ? statusDictionary[status] : "No status"
}
