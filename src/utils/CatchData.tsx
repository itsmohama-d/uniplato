import axios from "axios"

interface apiData {
    data: {
        data: {
            data: [
                id: number,
                image: string,
                description: string,
                title: string
            ],
            limit: number,
            page: number,
            total: number,
            totalpages: number,
            offset: number,
            hasNextPage: boolean,
            hasPrevPage: false
        }
    }
}


export const CatchData = async ({ pageParam = 1 }) => {
    const res: apiData = await axios.get('https://uniplato.staging.uniplato.us/api/v1/mock-data?page=' + pageParam)

    const { data } = res
    return (data.data)
}