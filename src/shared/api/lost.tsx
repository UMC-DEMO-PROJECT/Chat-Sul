import { TPostLost } from 'shared/type/LostType';
import { axiosInstance } from './common/axiosInstance';

//분실물 등록 API
export const PostLost = async ({ data }: { data: TPostLost }) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await axiosInstance.post(
    `/lost-item/business/${data.venueId}/post`,
    {
      title: data.title,
      itemImg: data.itemImg,
      description: data.description,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  console.log('분실물 등록 API :', response);
  return response.data;
};

//분실물 수정 API
export const PatchUpdate = async ({ data }: { data: TPostLost }) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await axiosInstance.patch(
    `/lost-item/business/${data.venueId}/update/${data.lostItemId}`,
    {
      title: data.title,
      itemImg: data.itemImg,
      description: data.description,
      foundDate: data.date,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
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
  const accessToken = localStorage.getItem('accessToken');
  const response = await axiosInstance.patch(
    `/lost-item/business/${venueId}/status/${lostItemId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  console.log('분실물 수취상태 변경 성공 : ', response);
  return response.data;
};

//분실물 검색 API
export const GetSearch = async ({
  page,
  venueId,
  text,
}: {
  page: number;
  venueId: number;
  text: string;
}) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await axiosInstance.get(
    `/lost-item/${venueId}/search/${page}`,
    {
      params: { keyword: text },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
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
  const accessToken = localStorage.getItem('accessToken');
  const response = await axiosInstance.get(
    `/lost-item/member/${venueId}/list/${page}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
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
  const accessToken = localStorage.getItem('accessToken');
  const response = await axiosInstance.get(
    `/lost-item/member/${venueId}/detail/${lostItemId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
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
  const accessToken = localStorage.getItem('accessToken');
  const response = await axiosInstance.delete(
    `/lost-item/business/${venueId}/delete/${lostItemId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  console.log('상세 게시글 삭제하기 성공 : ', response);
  return response.data;
};
