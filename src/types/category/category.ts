export interface CategoryPayload {
  name: string;
  description: string;
  authorId: number;
}

export interface CategoryResponse {
  id: number;
  name: string;
  description: string;
  authorId: number;
}