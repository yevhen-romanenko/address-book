import { observable } from "mobx";
import { Contact } from "./interfaces";

class ContactsStore {

  @observable contacts: Contact[] = [];

  // contacts = [];

  setContacts(contacts: Contact[]) {
    this.contacts = contacts;
  }
}

// ContactsStore = decorate(ContactsStore, {
//   contacts: observable,
//   setContacts: action,
// });



export { ContactsStore };
