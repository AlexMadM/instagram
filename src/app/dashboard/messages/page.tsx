"use client";
import { useState } from "react";
import { MyPostModal } from "@/components/my-post/my-post-modal";
import { Button } from "@/components/ui/button/button";

const MyPostPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>Open My Post</Button>
      <MyPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
export default MyPostPage;
