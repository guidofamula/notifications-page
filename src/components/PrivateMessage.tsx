const PrivateMessage = (props: any) => {
  const { pm } = props;
  return (
    <div
      {...props}
      className='flex flex-col md:flex-row md:max-w-xl rounded-md bg-netral-white p-3 border border-netral-g-blue-3 cursor-pointer hover:bg-netral-g-blue-3 ease-in-out duration-300 text-netral-d-g-blue font-medium'
    >
      <div className='text-xs py-1'>
        <p>{pm}</p>
      </div>
    </div>
  );
};

export default PrivateMessage;
