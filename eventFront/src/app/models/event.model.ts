export interface Event {
  id: number;
  name: string;
  date: String; // Ensure the format matches what your backend provides
  location: string;
  category: string;
  capacity: number;
  price: number;
}
