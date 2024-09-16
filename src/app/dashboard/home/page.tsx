'use client';

import React, {useState} from 'react';
import car1 from '../../../../src/assets/imgs/car-1.jpg'
import car2 from '../../../../src/assets/imgs/car-2.jpg'
import car3 from '../../../../src/assets/imgs/car-3.jpg'
import car4 from '../../../../src/assets/imgs/car-4.jpg'
import car5 from '../../../../src/assets/imgs/car-5.jpg'

import Image from 'next/image'

import Carousel from "@/components/ImageSlider";
import {Dialog} from "@/components/ui/dialog";
import {Card} from "@/components/ui/card";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Typography} from "@/components/ui/typography";
import {HeartOutline} from "@/assets/components";
import {CommentIcon} from "@/assets/Comment";



const Home = () => {
    const [open, setOpen] = useState(false)
    const slides = [
        car1,
        car2,
        car3,
        car4,
        car5,
    ]

    return (<Card className="flex mx-auto  flex-col items-center justify-center w-96">
            <Dialog onOpenChange={setOpen} open={open}>
                <div className="relative flex ">
                    <Carousel slides={slides}/>
                    <div className="flex self-start justify-center mb-4">
                        <Avatar className="rounded-full w-9 h-9 ">
                            <AvatarImage
                                src={"https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"}
                                alt="Avatar Image"/>
                        </Avatar>
                        <Typography as="span" className="self-center   text-xl font-bold">
                            Name Surname

                        </Typography>
                    </div>
                </div>
            </Dialog>
            <div className="flex self-start justify-center mb-4">
                <Avatar className="rounded-full w-9 h-9 ">
                    <AvatarImage
                        src={"https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"}
                        alt="Avatar Image"/>
                </Avatar>
                <Typography as="span" className="self-center   text-xl font-bold">
                    Name Surname

                </Typography>
           </div>
            <Image onClick={() => setOpen(true)} src={car1} width={500} height={500} alt="car"/>
            <div className=" flex self-start gap-3 mt-4 mb-4 ">
                <HeartOutline className='h-5 w-5'/>
                <CommentIcon />
            </div>
            <Avatar  className="self-start rounded-full w-9 h-9 " >
                <AvatarImage src={"https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"} alt="Avatar Image"/>
            </Avatar>
            <Typography as="span" className="self-center   text-xl font-bold">
                Name Surname
asdasdfsfdsfadfasdfasdfasdfasd
            </Typography>
           </Card>



    );
};

export default Home;