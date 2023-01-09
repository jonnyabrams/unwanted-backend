const users = [
  {
    id: 1,
    name: "Jonny",
    email: "jonny@jonny.com",
    password: "jonny",
  },
  {
    id: 2,
    name: "Diego",
    email: "diego@diego.com",
    password: "diego",
  },
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser,
};