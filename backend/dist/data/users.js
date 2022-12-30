import bcrypt from 'bcryptjs';
const users = [
    {
        name: 'Admin User',
        username: 'admin',
        email: 'admin@hotshoe.com',
        password: bcrypt.hashSync('11111111', 10),
        isAdmin: true,
    },
    {
        name: 'Shivaji Chalise',
        username: 'shivajichalise',
        email: 'respond2shivaji@gmail.com',
        password: bcrypt.hashSync('11111111', 10),
        isAdmin: true,
    },
    {
        name: 'Suraj Pahari',
        username: 'chyante',
        email: 'surajpahari@gmail.com',
        password: bcrypt.hashSync('11111111', 10),
    },
    {
        name: 'Yakeen Kapali',
        username: 'kaledon',
        email: 'yakeenkapali@gmail.com',
        password: bcrypt.hashSync('11111111', 10),
    },
];
export default users;
//# sourceMappingURL=users.js.map