import React from "react";

// Location 타입 정의
interface Coordinates {
  lat: number;
  lng: number;
}

interface RentalCardProps {
  name: string;
  coordinates: Coordinates;
}

const RentalCard: React.FC<RentalCardProps> = ({ name, coordinates }) => {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>
        좌표: {coordinates.lat}, {coordinates.lng}
      </p>
    </div>
  );
};

const styles = {
  card: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "300px",
    marginTop: "20px",
  },
};

export default RentalCard;
