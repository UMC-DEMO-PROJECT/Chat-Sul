import { axiosInstance } from './common/axiosInstance';

export const PostAdd = async (addData: {
  name: string;
  address: string;
  phone: string;
  account: string;
  bank: string;
  detailAddress: string;
}) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.post('/venue/add', addData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('매장 생성 실패', error);
    throw error;
  }
};

export const GetMap = async () => {
  try {
    const response = await axiosInstance.get('/venue/map');
    return response.data;
  } catch (error) {
    console.error('지도 불러오기 실패', error);
    throw error;
  }
};
