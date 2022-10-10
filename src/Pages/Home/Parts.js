import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts();
    return (
        <div className="my-16">
            <div>
                <h1 className="text-center text-2xl font-bold text-white my-4 ">Car Parts</h1>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                parts.slice(-9).map(part =><Part key={part._id} part={part}></Part>)
            }
            </div>
        </div>
    );
};

export default Parts;