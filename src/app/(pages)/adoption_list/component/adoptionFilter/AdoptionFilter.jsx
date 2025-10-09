import { IoMdClose } from "react-icons/io";


const AdoptionFilter = ({ adoptionData, filter, setFilter, toggle, handleToggle }) => {


    const hanleFilterClear = () => {
        setFilter({
            species: "",
            district: "",
            division: ""
        })
    }


    return (
        <div className={`z-20 min-h-screen w-80 border p-2 bg-white dark:bg-[#0D1B2A] absolute lg:static transition-transform duration-300 ${toggle ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
  `}>
            <div className="flex items-center justify-between">
                <h1 className='text-center text-xl font-bold'>Adopt Filter</h1>
                <IoMdClose onClick={handleToggle} className="text-xl cursor-pointer lg:hidden" />
            </div>
            <div className='my-5'>
                <p onClick={hanleFilterClear} className='text-[15px] cursor-pointer text-[#e76f51] text-right'>All clear</p>
                <p>Species</p>
                <select
                    value={filter.species}
                    onChange={(e) => setFilter({ ...filter, species: e.target.value })}
                    className="border w-full p-2"
                >
                    {
                        adoptionData?.map((species, index) => (
                            <option key={index} value={species?.species}>
                                {species?.species || "N/A"}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className='my-5'>
                <p>Distric</p>
                <select
                    value={filter.district}
                    onChange={(e) => setFilter({ ...filter, district: e.target.value })}
                    className="border w-full p-2"
                >
                    {
                        adoptionData?.length > 0
                            ? adoptionData.map((item, index) => (
                                <option key={index} value={item?.address?.district}>
                                    {item?.address?.district || "N/A"}
                                </option>
                            ))
                            : <option disabled>Loading...</option>
                    }
                </select>
            </div>
            <div className='my-5'>
                <p>Division</p>
                <select
                    value={filter.division}
                    onChange={(e) => setFilter({ ...filter, division: e.target.value })}
                    className="border w-full p-2"
                >
                    <option value="">Select Division</option>
                    {
                        adoptionData?.length > 0
                            ? adoptionData.map((item, index) => (
                                <option key={index} value={item?.address?.division}>
                                    {item?.address?.division || "N/A"}
                                </option>
                            ))
                            : <option disabled>Loading...</option>
                    }
                </select>
            </div>
        </div>
    );
};

export default AdoptionFilter;