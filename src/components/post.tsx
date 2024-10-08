'use client'
import {Post} from "@/app/services/inctagram.types";
import UserAvatar from "@/components/UserAvatar";
import {Card} from "@/components/ui/card";
import Image from "next/image";


type PublicPostItemProps = {
    post: Post
}

export  const PostAll = ({ post }: PublicPostItemProps ) => {

return (
    <div className="flex flex-col space-y-2.5">
        <div className="flex items-center justify-between px-3 sm:px-0">
            <div className="flex space-x-3 items-center">
                <UserAvatar user={post.avatarOwner} userName={post.userName} />
                <div className="text-sm">
                    <p className="space-x-1">
                        <span className="font-semibold">{post.owner.firstName}</span>
                        <span
                            className="font-medium text-neutral-500 dark:text-neutral-400
                      text-xs
                    "
                        >
                •
              </span>
                        {/*<Timestamp createdAt={post.createdAt} />*/}
                    </p>
                    <p className="text-xs text-black dark:text-white font-medium">
                        Dubai, United Arab Emirates
                    </p>
                </div>
            </div>

            {/*<PostOptions post={post} userId={userId} />*/}
        </div>

        <Card className="relative h-[450px] w-full overflow-hidden rounded-none sm:rounded-md">
            <Image
                src={post.images[0].url}
                alt="Post Image"
                fill
                className="sm:rounded-md object-cover"
            />
        </Card>


        {/*<PostActions post={post} userId={userId} className="px-3 sm:px-0" />*/}

        {/*{post.caption && (*/}
        {/*    <div className="text-sm leading-none flex items-center space-x-2 font-medium px-3 sm:px-0">*/}
        {/*        <Link href={`/dashboard/${username}`} className="font-bold">*/}
        {/*            {username}*/}
        {/*        </Link>*/}
        {/*        <p>{post.caption}</p>*/}
        {/*    </div>*/}
        {/*)}*/}

        {/*<Comments postId={post.id} comments={post.comments} user={session.user} />*/}
    </div>
);
}