import React from 'react';
import Icon from '../Icon/Icon';

// props의 타입 정의
interface RentalCardProps {
  title: string;
  description: string;
  image: string;
  location: string;
}

const RentalCard: React.FunctionComponent<RentalCardProps> = ({
  title,
  description,
  image,
  location,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 flex items-center gap-4 shadow-sm">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="flex items-center gap-2 mt-4 text-gray-700">
          <Icon name="location" size={20} />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
