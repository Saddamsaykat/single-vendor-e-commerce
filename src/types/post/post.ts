export interface PostPayload {
  title: string;
  comment: string;
  productName: string;
  price: number;
  authorId: number;
  categoryId: number;
}
export interface PostUpdatePayload {
  title?: string;
  comment?: string;
  productName?: string;
  price?: number;
  categoryId?: number;
}