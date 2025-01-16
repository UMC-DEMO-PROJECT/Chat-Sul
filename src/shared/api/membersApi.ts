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
