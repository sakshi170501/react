import React, { useEffect, useState } from 'react'

function Resign() {
    const [windowwidth, setWindowwidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleresize = () => {
            setWindowwidth(window.innerWidth);
        };

        window.addEventListener('resize', handleresize);

        return () => {
            window.removeEventListener('resize', handleresize);
        };
    }, []);

    return (
        <div>
            <h1>Window width: {windowwidth}px</h1>
        </div>
    )
}

export default Resign