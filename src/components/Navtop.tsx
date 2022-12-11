const Navtop = () => {
  return (
    <div className='flex flex-row justify-between sm:pt-3 sm:p-1 mb-4'>
      <h5 className='text-netral-v-d-blue text-xl sm:text-sm leading-tight font-bold mb-2'>
        Notifications
        <span className='bg-primary-blue text-netral-white sm:px-1 sm:px-1.5 md:px-2 sm:mx-1 sm:mt-1 md:mx-1 absolute h-auto justify-center md:mt-0.5 md:m-auto md:rounded-md sm:rounded-sm font-bold text-xs'>
          3
        </span>
      </h5>
      <p className='text-netral-d-g-blue sm:text-xs sm:mt-1 ease-in-out duration-300 hover:text-primary-blue cursor-pointer'>
        Mark all as read
      </p>
    </div>
  );
};

export default Navtop;
