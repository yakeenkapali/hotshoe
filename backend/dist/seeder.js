import dotenv from 'dotenv';
import connectDB from './config/db.js';
import users from './data/users.js';
dotenv.config();
const importUsers = () => {
    try {
        users.forEach(async (user) => {
            await connectDB.query(`
        INSERT INTO users (name, username, email, password)
        VALUES (?, ?, ?, ?)
        `, [user.name, user.username, user.email, user.password]);
            console.log('Users Imported!');
            process.exit();
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
const removeUsers = async () => {
    try {
        await connectDB.query(`TRUNCATE table users`);
        console.log('Users Destroyed!');
        process.exit();
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
if (process.argv[2] === '-d') {
    removeUsers();
}
else {
    importUsers();
}
//# sourceMappingURL=seeder.js.map