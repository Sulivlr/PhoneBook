export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: number;
  photo: string;
}

export interface ContactMutation {
  name: string;
  email: string;
  phone: string;
  photo: string;
}