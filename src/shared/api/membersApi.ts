import { axiosInstance } from './common/axiosInstance';

export const PostLogin = async (loginData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post('/members/login', loginData);
    return response.data;
  } catch (error) {
    console.error('로그인 실패', error);
    throw error;
  }
};

export const PostRegister = async (registerData: {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post('/members/signup', registerData);
    return response.data;
  } catch (error) {
    console.error('회원가입 실패', error);
    throw error;
  }
};

export const PostSocialRegister = async (socialRegisterData: {
  name: string;
  phoneNumber: string;
}) => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axiosInstance.post(
      '/members/signup/social',
      socialRegisterData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('회원가입 실패', error);
    throw error;
  }
};
