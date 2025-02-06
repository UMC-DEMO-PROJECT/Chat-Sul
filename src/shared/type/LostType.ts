export type TPostLost = {
  title: string;
  itemImg?: File | null;
  description: string;
  venueId: number;
};

export type TLostItem = {
  id: number;
  title: string;
  date: string;
  state: string;
  name: string;
  imgUrl: string;
  content: string;
};

export interface ILostItem {
  lostItemId: number;
  title: string;
  description: string;
  foundDate: string;
  lostItemStatus: string;
}

export interface ILostItemResponse {
  lostItemPreViewDTOList: ILostItem[];
  listSize: number;
  totalPage: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}
export interface IGetLostListResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: ILostItemResponse;
}
