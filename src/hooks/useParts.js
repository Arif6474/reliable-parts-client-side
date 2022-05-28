const { useState, useEffect } = require("react")
const useParts = () => {
    const [parts , setParts] = useState([]);

    useEffect(() => {
        fetch('https://safe-thicket-05218.herokuapp.com/part')
        .then(res => res.json())
        .then(data => setParts(data));
    },[])

    return [parts, setParts];
}

export default useParts;