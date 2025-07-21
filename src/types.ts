export interface CoordinatorDto {
  _id: string;
  name: string;
  location: string;
  price: number;
  photoUrl: string;
  bio: string;
}

export interface WeddingBooking {
  coordinatorId: string;
  name: string;
  email: string;
  weddingDate: string;
  guestNumber: number;
}
