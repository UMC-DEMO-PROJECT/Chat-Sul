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
  const response = await axiosInstance.get(`/reservation/list`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: { page: pageParam },
  });
  return response.data;
};

export const GetOwnerReservation = async (
  pageParam: number,
  status: string,
  venueId: number
) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await axiosInstance.get(
    `/reservation/business/list/${venueId}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: { page: pageParam, status },
    }
  );
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

export const GetReservationAccountInfo = async (reservationId: number) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await axiosInstance.get(
    `/reservation/${reservationId}/account-info`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export const PatchReservationCancel = (reservationId: number) => {
  const accessToken = localStorage.getItem('accessToken');
  return axiosInstance.patch(`/reservation/cancel/${reservationId}`, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const PatchReservationBusinessReject = (
  reservationId: number,
  venueId: number
) => {
  const accessToken = localStorage.getItem('accessToken');
  return axiosInstance.patch(
    `/reservation/business/${venueId}/reject/${reservationId}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const PatchReservationBusinessConfirm = (
  reservationId: number,
  venueId: number
) => {
  const accessToken = localStorage.getItem('accessToken');
  return axiosInstance.patch(
    `/reservation/business/${venueId}/confirm/${reservationId}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const PatchReservationBusinessAccept = (
  reservationId: number,
  venueId: number
) => {
  const accessToken = localStorage.getItem('accessToken');
  return axiosInstance.patch(
    `/reservation/business/${venueId}/accept/${reservationId}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
