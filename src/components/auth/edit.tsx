'use client'
import React, {ChangeEvent, useState} from "react";
import {Button} from "@/components/ui/button/button";
import {useCreateProfileAvatarMutation} from "@/app/services/inctagram.service";
import {Modal} from "@/components/ui/modal";


export const ImageUpload = () => {
    const [open, setOpen] = useState(false)
    const [cover, setCover] = useState<File | null>(null)
    const [createAvatar, { isLoading: isLoadingCreateAvatar }] = useCreateProfileAvatarMutation()

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]

            setCover(file)
        }
    }

    const uploadImage = async (file: File) => {
        try {
            await createAvatar({file})
        } catch (e) {
        }
    }

    const uploadImageHandler = () => {
       cover &&    uploadImage(cover)
    }

    return (
        <div>
            <Button onClick={()=>setOpen(!open)}>dadsfa</Button>
        <Modal open={open} onOpenChange={setOpen} title="Modal">

            <div>
                <input accept={'image/*'} onChange={uploadHandler} type={'file'}/>
                <Button onClick={uploadImageHandler}>upload</Button>
            </div>

        </Modal>  </div>
    )
}