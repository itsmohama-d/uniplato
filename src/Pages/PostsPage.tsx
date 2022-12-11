import React, { FC, useEffect } from 'react'
import Loading from '../components/Loading'
import { useInfiniteQuery, QueryFunction } from 'react-query'
import PostComponent from '../components/PostComponent'
import { CatchData } from '../utils/CatchData'
interface Props {
    id: number
    title: string,
    description: string,
    image: string
}
interface apiDataInter {
    data: [
        Props
    ],
    limit: number,
    page: number,
    total: number,
    totalpages: number,
    offset: number,
    hasNextPage: boolean,
    hasPrevPage: boolean
}


const PostsPage: FC = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery(['posts'], CatchData as any, {
        getNextPageParam: (lastPage: apiDataInter) => lastPage?.page + 1
    })


    useEffect(() => {
        window.addEventListener('scroll', function () {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                fetchNextPage()
            }
        });
    }, [fetchNextPage])
    console.log(data)
    return (
        <div className='postpage'>
            {
                status === "loading" ? (<Loading />) : status === "error" ? (<span>Something went Wrong</span>) : (
                    <>
                        {data?.pages.map((group: apiDataInter, i) => (
                            <React.Fragment key={i}>
                                {group?.data.map((post: Props) => (<PostComponent key={post?.id} title={post?.title} description={post?.description} image={post?.image} />))}
                            </React.Fragment>
                        ))}
                        {
                            isFetchingNextPage ? <Loading /> : hasNextPage ? <Loading /> : <span> There Is no More To Load</span>
                        }
                    </>
                )
            }

        </div>
    )
}

export default PostsPage