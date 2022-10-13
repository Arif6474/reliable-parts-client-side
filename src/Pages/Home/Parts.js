import { Link } from 'react-router-dom';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts();
    return (
        <div className="my-24">
            <div>
                <h1 data-aos="zoom-in" 
    data-aos-easing="linear"
    data-aos-duration="1500" className="text-center text-2xl my-8 font-bold w-32 mx-auto text-white uppercase border-b-2 border-[#ea572b] ">Car Parts</h1>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                parts.slice(-6).map(part =><Part key={part._id} part={part}></Part>)
            }
            </div>
          <div data-aos="fade-up" 
    data-aos-easing="linear"
    data-aos-duration="1500" className=" flex mt-8 items-center justify-center">
          <Link to="/all-parts" className="font-bold text-xl px-3 py-1 rounded-xl bg-[#104355] hover:bg-[#072c45] text-white">All Parts</Link>
          </div>

        </div>
    );
};

export default Parts;