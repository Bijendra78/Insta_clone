import React from "react";
import { Routes, Route } from "react-router-dom"
import Landing from "../components/landingComponent/Landing";
import NewPost from "../components/landingComponent/Post/New/NewPost";
import DataPage from "../components/dataPage/DataPage";


export default function AppRouter() {
    return <>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/new" element={<NewPost />} />
            <Route path="/post" element={<DataPage />} />
        </Routes>
    </>
}