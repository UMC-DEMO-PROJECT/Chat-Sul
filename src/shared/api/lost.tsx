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

//분실물 수정 API
export const PatchUpdate = async ({
  venueId,
  lostItemId,
}: {
  venueId: number;
  lostItemId: number;
}) => {
  const response = await axiosInstance.patch(
    `/lost-item/business/${venueId}/update/${lostItemId}`
  );
  console.log('분실물 수정 성공 : ', response);
  return response.data;
};

//분실물 수취 상태 변경 API
export const PatchLostState = async ({
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

//분실물 검색 API
export const GetSearch = async ({
  page,
  venueId,
}: {
  page: number;
  venueId: number;
}) => {
  const response = await axiosInstance.get(
    `/lost-item/${venueId}/search/${page}`
  );
  return response.data;
};
//손님용 분실물 글 목록 가져오기 API
export const GetLostList_User = async ({
  page,
  venueId,
}: {
  page: number;
  venueId: number;
}) => {
  const response = await axiosInstance.get(
    `/lost-item/member/${venueId}/list/${page}`
  );
  return response.data;
};

//손님용 상세 게시글 가져오기 API
export const GetLostDetail_User = async ({
  venueId,
  lostItemId,
}: {
  venueId: number;
  lostItemId: number;
}) => {
  const response = await axiosInstance.get(
    `/lost-item/member/${venueId}/detail/${lostItemId}`
  );
  console.log('상세 게시글 가져오기 성공 : ', response);
  return response.data;
};

//사장님용 분실물 글 목록 가져오기 API
export const GetLostList_Owner = async ({
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

//사장님용 상세 게시글 가져오기 API
export const GetLostDetail_Owner = async ({
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
