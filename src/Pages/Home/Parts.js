import { Link } from 'react-router-dom';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts();
    return (
        <div className="my-24">
            <div>
                <h1 className="text-center text-2xl my-8 font-bold w-32 mx-auto text-white uppercase border-b-2 border-[#ea572b] ">Car Parts</h1>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                parts.slice(-6).map(part =><Part key={part._id} part={part}></Part>)
            }
            </div>
          <div className=" flex mt-8 items-center justify-center">
          <Link to="/all-parts" className="font-bold text-xl px-3 py-1 rounded-xl bg-[#e64c1d] hover:bg-[#ac2b04] text-white">All Parts</Link>
          </div>

        </div>
    );
};

export default Parts;