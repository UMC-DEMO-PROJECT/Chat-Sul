import { axiosInstance } from './common/axiosInstance';

export const PostMenu = async (venueId: number, imageUrl: string) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.post(
      `/menu/add/${venueId}`,
      imageUrl,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error('메뉴 등록 실패', error);
    throw error;
  }
};

export const GetMenu = async (venueId: number) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.get(`/menu/${venueId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('메뉴 목록 불러오기 실패', error);
    throw error;
  }
};
