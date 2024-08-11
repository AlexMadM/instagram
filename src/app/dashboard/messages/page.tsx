'use client'
import React, {useState} from 'react';
import {Modal} from "@/components/ui/modal";
import {Button} from "@/components/ui/button/button";

const Messages = () => {
    const [open, setOpen] =useState(false);
    return (
        <div>
<Button onClick={()=>setOpen(!open)}>dadsfa</Button>
            <Modal open={open} onOpenChange={setOpen} title="Modal">
                <h1>Messagess</h1>
                <p>ТЕКСТ</p>
            </Modal>
        </div>
    );
};

export default Messages;