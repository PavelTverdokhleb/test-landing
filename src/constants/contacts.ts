export enum ContactItem {
  phone,
  email,
}

type Contacts = {
  [key in ContactItem]: string;
};

export const CONTACTS: Contacts = {
  [ContactItem.phone]: "+1-234-567-8900",
  [ContactItem.email]: "info@mylogo.com",
};
