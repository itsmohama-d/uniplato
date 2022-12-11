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


const PostsPage: FC = () => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery(['posts'], CatchData as QueryFunction, {
        getNextPageParam: (lastPage: any) => lastPage?.page + 1,
    })



    useEffect(() => {
        window.addEventListener('scroll', function () {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                fetchNextPage()
            }
        });
    }, [])
    console.log(data)
    return (
        <div className='postpage'>
            {
                status === "loading" ? (<Loading />) : status === "error" ? (<span>{error as any}</span>) : (
                    <>
                        {data?.pages.map((group: any, i) => (
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