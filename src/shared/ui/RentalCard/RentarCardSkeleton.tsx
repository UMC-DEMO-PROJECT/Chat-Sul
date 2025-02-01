const RentarCardSkeleton = ({
  isLoading,
  count,
}: {
  isLoading: boolean;
  count: number;
}) => {
  return (
    <>
      {isLoading &&
        new Array(count).fill(0).map((_, i) => (
          <div
            key={i}
            className="w-full h-28 px-4 py-3 bg-white flex animate-pulse"
          >
            <div className="bg-sul-gray-200 w-full h-full rounded-lg "></div>
          </div>
        ))}
    </>
  );
};

export default RentarCardSkeleton;
