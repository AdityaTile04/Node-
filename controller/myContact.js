const getContact = (req, res) => {
  res.send("Hello from contacts");
};

const createContact = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.send("All fields are mandetory");
  }
  console.log(`this request body is :`, req.body);
  res.status(201).json({ message: "Create Contacts" });
};

const getContacts = (req, res) => {
  res.send(`Get contacts ${req.params.id}`);
};

const updateContact = (req, res) => {
  res.send(`Update contacts ${req.params.id}`);
};

const deleteContact = (req, res) => {
  res.send(`delete contacts ${req.params.id}`);
};

module.exports = {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
