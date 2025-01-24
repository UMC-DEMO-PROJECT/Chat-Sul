export type TPostLost = {
  title: string;
  itemImg: string;
  description: string;
  venueId: number;
};

export type TContent = [
  {
    lostItemId: number;
    title: string;
    foundDate: string;
    lostItemStatus: string;
    venueId: number;
    venueName: string;
    venueAddress: string;
    venuePhone: string;
  },
];
export type TLostListResponse = {
  content: TContent[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
  hasNext: false;
};
