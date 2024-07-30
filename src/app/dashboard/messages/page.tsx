'use client'
import React, {useState} from 'react';
import {Modal} from "@/components/ui/modal";

const Messages = () => {
    const [open, setOpen] =useState(false);
    return (
        <div>
<button onClick={()=>setOpen(!open)}>dadsfa</button>
            <Modal open={open} onOpenChange={setOpen} title="Modal">
                <h1>Messagess</h1>
                <p>ТЕКСТ</p>
            </Modal>
        </div>
    );
};

export default Messages;