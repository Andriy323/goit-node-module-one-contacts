const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
 
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
 
  const contact = await listContacts();
  const resultContact = contact.find((item) => item.id === contactId);
  return resultContact || null;
};

const removeContact = async (contactId) => {
 
  const contact = await listContacts();
const id  = contact.findIndex(item => item.id === contactId)
if(id === -1) {
  return
}
const [result] = contact.splice(id, 1)
await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2))
return result
};

const addContact = async (name, email, phone) => {

  const contact = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone
  }
contact.push(newContact)
await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2))
return newContact
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
