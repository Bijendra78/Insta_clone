
import React from 'react'
import InstaCard from '../instaCard/InstaCard'
import { Link } from 'react-router-dom'

// import User from "../../../public/data.json"

const DataPage = ({uData}) => {
    
    console.log(uData, "DataPage console")
    return <>
    {/* <Link to="/post"> */}
        <InstaCard getUData={uData} />
    {/* </Link> */}
    </>


}

export default DataPage