import { axiosBasic, axiosInstance } from './common/axiosInstance';

export const PostMenu = async (venueId: number, imageUrl: FormData) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosBasic.post(`/menu/add/${venueId}`, imageUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
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

export const DeleteMenu = async (venueId: number, menuId: number) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axiosInstance.delete(
      `/menu/${venueId}/delete/${menuId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error('메뉴 이미지를 삭제 실패', error);
    throw error;
  }
};
