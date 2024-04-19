
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
    <div className="w-full my-10 mx-6 md:m-10 flex items-center flex-col gap-4 ">
      <div className="flex items-start justify-center flex-col w-[80%] gap-3">
        <h2 className="dark:text-white text-black text-2xl">Recent Reviews</h2>
        <div className="md:w-[80%] md:flex  flex flex-col ">
       <div className="flex flex-col relative w-[280px] md:w-full">
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
            className="w-full h-full overflow-x-auto whitespace-nowrap overflow-y-hidden scrollbar-hide  mb-4 flex gap-6 justify-center items-center ">
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
