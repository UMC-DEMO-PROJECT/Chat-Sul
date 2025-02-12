const PostSkeleton = () => {
  return (
    <>
      {new Array(6).fill(0).map((_, i) => (
        <div
          key={i}
          className="w-[356px] p-5 bg-white border-b-[0.2px] border-[#D1D1D6] flex animate-pulse"
        >
          <div className="bg-sul-gray-200 w-full h-full rounded-lg "></div>
        </div>
      ))}
    </>
  );
};

export default PostSkeleton;
