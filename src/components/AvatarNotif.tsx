import Avatar from "./Avatar";

const AvatarNotif = (props: any) => {
  const {
    srcAvatar,
    name,
    about,
    destiny,
    time,
    classCard = "flex flex-col md:w-[520px] md:flex-row md:max-w-xl rounded-md bg-netral-g-blue-2 p-2",
    children,
    altAvatar,
    altImageCommented,
    imageCommented,
    status,
    classAbout = "text-netral-d-g-blue font-bold ease-in-out duration-150 hover:text-primary-blue cursor-pointer",
  } = props;
  return (
    <div>
      <div className={`${classCard} relative`}>
        <Avatar className='w-[42px] md:mr-3' src={srcAvatar} alt={altAvatar} />
        <div className='text-xs absolute px-[52px] pr-1'>
          <span className='font-bold ease-in-out duration-150 hover:text-primary-blue cursor-pointer'>
            {name}
          </span>
          <span className='text-netral-d-g-blue'>{about}</span>
          <span className={`${classAbout}`}>{destiny}</span>
          <span className='text-primary-red font-bold text-[5px] align-middle '>
            {status}
          </span>{" "}
          <div>
            <p className='text-xs sm:text-[10px] text-netral-g-blue-4'>
              {time}
            </p>
          </div>
        </div>
        <div className=''>
          <img
            className='ease-in-out duration-300 absolute w-9 sm:w-7 sm:mx-[240px] md:mx-[390px] hover:shadow-md hover:shadow-primary-blue cursor-pointer sm:-my-10 md:mt-1'
            src={imageCommented}
            alt={altImageCommented}
          />
        </div>
      </div>
      <div className='ml-14 md:-mr-12'>
        <p className='md:w-[430px]'>{children}</p>
      </div>
    </div>
  );
};

export default AvatarNotif;
