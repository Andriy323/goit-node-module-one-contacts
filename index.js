
const argv = require("yargs").argv;
const contact = require("./contacts");
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contact.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const getContact = await contact.getContactById(id);
      console.log(getContact);
      break;

    case "add":
      const addContact = await contact.addContact(name, email, phone);

      console.table(addContact);
      break;

    case "remove":
      const deleteContact = await contact.removeContact(id);
      console.table(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

console.log("Welcome ");
