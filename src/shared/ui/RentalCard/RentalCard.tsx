import React from "react";
import Icon from "./Icon";

// props의 타입 정의
interface RentalCardProps {
    title: string;
    description: string;
    image: string;
    location: string;
}

const RentalCard: React.FC<RentalCardProps> = ({ title, description, image, location }) => {
    return (
        <div style={styles.card}>
            <img src={image} alt={title} style={styles.image} />
            <div style={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div style={styles.location}>
                    <Icon name="location" size={20} color="red" />
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
    },
    image: {
        width: "80px",
        height: "80px",
        borderRadius: "8px",
    },
    content: {
        flex: 1,
    },
    location: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
};

export default RentalCard;
