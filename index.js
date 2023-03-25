// index.js
const argv = require("yargs").argv;
const contact = require("./contacts");
// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      // ...
      const allContacts = await contact.listContacts();
      console.table(allContacts);
      break;

    case "get":
      // ... id
      const getContact = await contact.getContactById(id);
      console.log(getContact);
      break;

    case "add":
      // ... name email phone
      const addContact = await contact.addContact(name, email, phone);

      console.table(addContact);
      break;

    case "remove":
      // ... id
      const deleteContact = await contact.removeContact(id);
      console.table(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

console.log("Welcome ");
