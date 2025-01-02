import connectdb from "./database/mongo.js";
import user from "./models/Users.js";
import bcrypt from 'bcrypt';

const userRegister = async () => {
    try {
        await connectdb();  // Ensure the connection is established
        const hashpass = await bcrypt.hash("admin", 10);
        const newUser = new user({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashpass,
            role: "Admin"
        });
        await newUser.save();
        console.log("User admin saved successfully");
    } catch (error) {
        console.error("Error saving admin user:", error);
    }
};

userRegister();
