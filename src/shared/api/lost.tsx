import { TPostLost } from 'shared/type/LostType';
import { axiosInstance } from './common/axiosInstance';

//분실물 등록 API
export const PostLost = async ({
  data,
  venueId,
}: {
  data: TPostLost;
  venueId: number;
}) => {
  const response = await axiosInstance.post(
    `/lost-item/business/${venueId}/post`,
    data
  );
  console.log('분실물 등록 API :', response);
  return response.data;
};

//분실물 글 목록 가져오기 API
export const GetLostList = async ({
  page,
  venueId,
}: {
  page: number;
  venueId: number;
}) => {
  const response = await axiosInstance.get(
    `/lost-item/business/${venueId}/list/${page}`
  );
  return response.data;
};

//상세 게시글 가져오기 API
export const GetLostDetail = async ({
  venueId,
  lostItemId,
}: {
  venueId: number;
  lostItemId: number;
}) => {
  const response = await axiosInstance.get(
    `/lost-item/business/${venueId}/detail/${lostItemId}`
  );
  console.log('상세 게시글 가져오기 성공 : ', response);
  return response.data;
};

//분실물 글 삭제 API
export const DeleteLost = async ({
  venueId,
  lostItemId,
}: {
  venueId: number;
  lostItemId: number;
}) => {
  const response = await axiosInstance.delete(
    `/lost-item/business/${venueId}/detail/${lostItemId}`
  );
  console.log('상세 게시글 삭제하기 성공 : ', response);
  return response.data;
};

//분실물 수취 상태 변경 API
export const PatchLost = async ({
  venueId,
  lostItemId,
}: {
  venueId: number;
  lostItemId: number;
}) => {
  const response = await axiosInstance.patch(
    `/lost-item/business/${venueId}/status/${lostItemId}`
  );
  console.log('분실물 수취상태 변경 성공 : ', response);
  return response.data;
};

//손님용 분실물 목록 가져오기 API
export const GetUserLostList = async ({ page }: { page: number }) => {
  const response = await axiosInstance.get(`/lost-item/member/list/${page}`);
  return response.data;
};
