import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex items-center justify-between">
      <input className="p-2 bg-primary-white w-2/5 rounded" placeholder="Search" type="text" />
      <div>
        <label className="mr-3" htmlFor="">
          Sort By :
        </label>
        <select className="p-2 bg-primary-white w-2/5 rounded" name="" id="">
          <option value="">All</option>
        </select>
      </div>
      <p>
        1 - 10 of 20
      </p>
      <div className="flex">
        <AiOutlineLeft className="text-xl mr-8" />
        <AiOutlineRight className="text-xl" />
      </div>
    </div>
  )
}

export default Search;