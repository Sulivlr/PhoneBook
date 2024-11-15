export interface ApiContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
}

export interface ApiContacts {
  [id: string]: ContactMutation;
}

export interface ContactMutation {
  name: string;
  email: string;
  phone: string;
  photo: string;
}