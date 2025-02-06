// Location 타입 정의
interface Coordinates {
  lat: number;
  lng: number;
}

interface RentalCardProps {
  name: string;
  coordinates: Coordinates;
}

const RentalCard = ({ name, coordinates }: RentalCardProps) => {
  return (
    <div className="p-5 border border-gray-300 rounded-lg w-[300px] mt-5">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-700">
        좌표: {coordinates.lat}, {coordinates.lng}
      </p>
    </div>
  );
};

export default RentalCard;
