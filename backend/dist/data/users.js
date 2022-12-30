import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
const users = [
    {
        id: uuidv4(),
        name: 'Admin User',
        email: 'admin@hotshoe.com',
        password: bcrypt.hashSync('11111111', 10),
        isAdmin: true,
    },
    {
        id: uuidv4(),
        name: 'Shivaji A Chalise',
        email: 'respond2shivaji@gmail.com',
        password: bcrypt.hashSync('11111111', 10),
        isAdmin: true,
    },
    {
        id: uuidv4(),
        name: 'Suraj Pahari',
        email: 'surajpahari@gmail.com',
        password: bcrypt.hashSync('11111111', 10),
    },
    {
        id: uuidv4(),
        name: 'Yakeen Kapali',
        email: 'yakeenkapali@gmail.com',
        password: bcrypt.hashSync('11111111', 10),
    },
];
export default users;
//# sourceMappingURL=users.js.map