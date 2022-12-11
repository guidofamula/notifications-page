const Avatar = (props: any) => {
  const { className = 'w-[40px] px-1', src, alt = 'Avatar' } = props;
  return <img {...props} className={`${className}`} src={src} alt={alt} />;
};

export default Avatar;
