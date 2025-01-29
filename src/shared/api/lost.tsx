import { TPostLost } from 'shared/type/LostType';
import { axiosInstance } from './common/axiosInstance';

export const PostLost = async (data: TPostLost) => {
  const response = await axiosInstance.post('/lost-item/business/post', data);
  console.log('분실물 등록 API :', response);
  return response.data;
};

export const GetLostList = async ({ page }: { page: number }) => {
  const response = await axiosInstance.get(`/lost-item/business/list/${page}`);
  return response.data;
};

export const GetLostDetail = async (lostItemId: number) => {
  const response = await axiosInstance.get(
    `/lost-item/business/detail/${lostItemId}`
  );
  console.log('상세 게시글 가져오기 성공 : ', response);
  return response.data;
};

export const DeleteLost = async (lostItemId: number) => {
  const response = await axiosInstance.delete(
    `/lost-item/business/detail/${lostItemId}`
  );
  console.log('상세 게시글 삭제하기 성공 : ', response);
  return response.data;
};

export const PatchLost = async (lostItemId: number) => {
  const response = await axiosInstance.patch(
    `/lost-item/business/${lostItemId}/status`
  );
  console.log('분실물 수취상태 변경 성공 : ', response);
  return response.data;
};

export const GetUserLostList = async ({ page }: { page: number }) => {
  const response = await axiosInstance.get(`/lost-item/member/list/${page}`);
  return response.data;
};
