import Navtop from "./Navtop";
import CardAvatar from "./CardAvatar";

const Card = (props: any) => {
  return (
    <div className='flex justify-center md:mt-10 md:mb-10'>
      <div className='block p-6 rounded-lg shadow-lg bg-netral-white md:max-w-2xl '>
        <div className='sm:max-md:container'>
          <Navtop />
          <CardAvatar />
        </div>
      </div>
    </div>
  );
};

export default Card;
