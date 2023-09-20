import React from 'react';
// import home from "../../images/home.png""
import heart from "../../images/heart.png"
import share from "../../images/share.png"

const InstaCard = ({getUData}) => {

    const cardStyle = {
        width: '400px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        alignItems: "center",
        justifyContent: "center",
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
    };

    const nameStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
    };

    const locationStyle = {
        fontSize: '14px',
        color: '#777',
    };

    // const dotsStyle = {
    //     width: '4px',
    //     height: '4px',
    //     borderRadius: '50%',
    //     backgroundColor: '#777',
    // };

    const imageStyle = {
        width: '100%',
        marginBottom: '12px',
    };
    const iconStyle = {
        width: '24px',
        height: '24px',
        marginRight: '8px',
    };
    const likesContainer = {
        display: "flex",
        justifyContent: "space-between",

    }

    return <>
        {getUData.map((data, index) => {
            return (
                <div key={index} style={cardStyle}>
                    <div style={headerStyle}>
                        <div>
                            <h3 style={nameStyle}>{data.name}</h3>
                            <p style={locationStyle}>{data.location}</p>
                        </div>
                        {/* <div style={dotsStyle}></div> */}
                        <div ><h1>...</h1></div>
                    </div>
                    <div style={imageStyle}>
                        <img src={data.PostImage} width={"100%"} alt="Card Image" />
                    </div>
                    <div>
                        <div style={likesContainer} >
                            <div>
                                <img style={iconStyle} src={heart} alt="Like Icon" />
                                <img style={iconStyle} src={share} alt="Share Icon" />
                            </div>
                            <div>
                                <p>June 2, 2023</p>
                            </div>
                        </div>
                        <div><p>likes 65</p></div>
                        <div>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
            )
        })}


    </>
};

export default InstaCard;