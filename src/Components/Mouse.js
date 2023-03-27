import React, { useEffect } from 'react';

const Mouse = () => {

    useEffect(()=>{
        const cursor = document.querySelector(".cursor");

        window.addEventListener("mousemove", (e) => {
            cursor.style.top = e.y + "px";
            cursor.style.left = e.x + "px";
        })
    }, [])

    return (
        <span className="cursor"></span>
    );
};

export default Mouse;