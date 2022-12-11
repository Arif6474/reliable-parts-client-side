const { useState, useEffect } = require("react")
const useParts = () => {
    const [parts , setParts] = useState([]);

    useEffect(() => {
        fetch('https://reliable-parts-server.up.railway.app/part')
        .then(res => res.json())
        .then(data => setParts(data));
    },[])

    return [parts, setParts];
}

export default useParts;