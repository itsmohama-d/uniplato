import React, { FC } from 'react'


interface Props {
    title: string,
    description: string,
    image: string
}


const PostComponent: FC<Props> = (posts: Props) => {
    const { image, title, description } = posts
    return (
        <div className='postcomponent'>
            <div className='container'>
                <img alt="profile" src={image} />
                <div className='text'>
                    <span>{title}</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default PostComponent