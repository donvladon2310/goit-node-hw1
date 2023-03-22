const fs = require("fs");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

// TODO: задокументувати кожну функцію
function listContacts() {

}

function getContactById(contactId) {
    // ...твій код
}

function removeContact(contactId) {
    // ...твій код
}

function addContact(name, email, phone) {
    // ...твій код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};