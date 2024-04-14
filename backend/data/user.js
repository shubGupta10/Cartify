import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User",
        email: "adminuser@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: "Lucifer Morningstar",
        email: "deviltheangel@gmail.com",
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: "Eternity",
        email: "eternity@gmail.com",
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;