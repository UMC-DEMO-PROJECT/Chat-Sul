import { axiosInstance } from './common/axiosInstance';

export const GetToken = async () => {
  try {
    const params = {};
    const response = await axiosInstance.get('/reissue/access-token', {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('토큰 확인 실패', error);
    throw error;
  }
};
