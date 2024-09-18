"use client";
import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/modal/modal";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button/button";
import { cn } from "@/utils/cn";

// Импортируйте изображения из папки assets/imgs
import img1 from "@/assets/imgs/car-1.jpg";
import img2 from "@/assets/imgs/car-2.jpg";
import img3 from "@/assets/imgs/car-3.jpg";

type Comment = {
  id: number;
  author: string;
  text: string;
  avatar: string;
};

export const MyPostModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3];
  const mockComments: Comment[] = [
    { id: 1, author: "John Doe", text: "Great post!", avatar: "/avatars/john.jpg" },
    { id: 2, author: "Jane Smith", text: "Love this!", avatar: "/avatars/jane.jpg" },
  ];
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose} title="My Post">
      <div className="flex flex-col md:flex-row bg-light-100 rounded-b-lg">
        <div className="w-full md:w-3/5 relative">
          <div className="aspect-w-4 aspect-h-3 relative">
            <Image
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-light-100 text-dark-900 rounded-full w-8 h-8 flex items-center justify-center"
          >
            &#8249;
          </Button>
          <Button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-light-100 text-dark-900 rounded-full w-8 h-8 flex items-center justify-center"
          >
            &#8250;
          </Button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full",
                  index === currentImageIndex ? "bg-light-100" : "bg-light-100 opacity-50"
                )}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/5 p-6 max-h-[500px] overflow-y-auto">
          <Typography variant="h3" className="mb-4 text-dark-900">
            Comments
          </Typography>
          {mockComments.map((comment) => (
            <div key={comment.id} className="mb-4 flex items-start">
              <Image
                src={comment.avatar}
                alt={comment.author}
                width={36}
                height={36}
                className="rounded-full mr-3"
              />
              <div>
                <Typography variant="subtitle1" className="font-semibold text-dark-900">
                  {comment.author}
                </Typography>
                <Typography variant="body2" className="text-dark-300">
                  {comment.text}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};
