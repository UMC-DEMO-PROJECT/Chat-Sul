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
  const accessToken = localStorage.getItem('accessToken');
  return axiosInstance.post(`/reservation/${venueId}`, reservationData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const GetReservation = async (pageParam: number) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await axiosInstance.get('/reservation/list', {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: { page: pageParam },
  });
  return response.data;
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

export const GetReservationAccountInfo = async (reservationId: string) => {
  const response = await axiosInstance.get(
    `/reservation/${reservationId}/account-info`,
    {}
  );
  return response.data;
};
