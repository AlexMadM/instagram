'use client'
import { PostAll} from "@/components/post";
import {useGetPublicPostsAllQuery} from "@/app/services/inctagramApi";

 function Posts() {
    const { data, error, isLoading } = useGetPublicPostsAllQuery({ pageSize: 50 })

    return (
        <>
            {data?.items.map((post ) => (
                <PostAll key={post.id} post={post} />
            ))}
        </>
    );
}

export default Posts;