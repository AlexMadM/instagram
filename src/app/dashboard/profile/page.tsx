import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import s from './profile.module.scss'

import PostsP from "@/components/PostsP";
import {SelectDemo} from "@/components/demo";

const Profile = () => {
    return (
        <div className={s.page}>
            <Tabs defaultValue="tab1" orientation="vertical">
                <TabsList aria-label="tabs example" className={s.container}>
                    <TabsTrigger className={s.tabTrigger} value="tab1">General information</TabsTrigger>
                    <TabsTrigger className={s.tabTrigger} value="tab2">Devices</TabsTrigger>
                    <TabsTrigger className={s.tabTrigger} value="tab3">Account Management</TabsTrigger>
                    <TabsTrigger className={s.tabTrigger} value="tab4">My payments</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1"><PostsP/></TabsContent>
                <TabsContent value="tab2"><SelectDemo/></TabsContent>
                <TabsContent value="tab3">Tab three content</TabsContent>
                <TabsContent value="tab4">Tab 4 content</TabsContent>
            </Tabs>
       </div>
    );
};

export default Profile;