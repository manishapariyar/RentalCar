
import data from "../../shared/reviewer";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import RevierwBox from "./RevierwBox";


const ClientReviews = () => {
  
  const slideLeft = () => {
    var slider = document.getElementById("roller");
    slider.scrollLeft = slider.scrollLeft - 100;
  };
  const slideRight = () => {
    var slider = document.getElementById("roller");
    slider.scrollLeft = slider.scrollLeft + 100;
  };



  return (
    <div className="w-full my-10 md:mx-0  flex items-center flex-col gap-4 justify-center ">
      <div className=" flex items-start justify-center flex-col p-4 w-[80%] gap-3 m-2">
        <h2 className="dark:text-white text-black text-2xl">Recent Reviews</h2>
        <div className="md:w-full md:flex  flex flex-col ">
       <div className="flex flex-col relative w-[280px] md:w-[100%]">
       <div className="flex self-end">
       <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            size={40}
            onClick={slideLeft}
          />
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
          onClick={slideRight}
        />
       
      </div>
      <div>
        <div id="roller"
            className="w-full h-full  whitespace-nowrap overflow-y-hidden overflow-x-auto scrollbar-hide  mb-4 flex gap-4 justify-center items-center scroll-smooth ">
          {data.map((item) => (
             <RevierwBox key={item.id} name ={item.name}  image={item.img} review ={item.review}  />
          ))}
        </div>
       </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
