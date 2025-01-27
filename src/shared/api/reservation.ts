import axios from 'axios';
import { axiosInstance } from './common/axiosInstance';

export const PostReservation = (
  venueId: string | undefined,
  reservationData: {
    reservationName: string;
    phoneNumber: string;
    reservationDate: string;
    reservationTime: string;
    numberOfGuests: number;
    depositorName: string;
  }
) => {
  const token = localStorage.getItem('token');
  return axiosInstance.post(`/reservation/${venueId}`, reservationData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const GetReservation = async (userId: number, page: number) => {
  try {
    const params = { userId, page };
    const response = await axiosInstance.get('/reservation/list', { params });
    return response.data;
  } catch (error) {
    console.error('예약 확인 실패', error);
    throw error;
  }
};

export const DeleteReservation = async (
  reservationId: number,
  userId: number
) => {
  try {
    const response = await axios.delete(
      `/reservation/cancel/${reservationId}`,
      { headers: { 'Content-Type': 'application/json' }, data: { userId } }
    );
    return response.data;
  } catch (error) {
    console.error('예약 취소 실패', error);
    throw error;
  }
};
