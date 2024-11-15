export interface Contact extends ContactMutation {
  id: string;
}

export interface ApiContacts {
  [id: string]: Contact
}

export interface ContactMutation {
  name: string;
  email: string;
  phone: string;
  photo: string;
}