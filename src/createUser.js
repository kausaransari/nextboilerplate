const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function createNewUser() {
  try {
    const hashedPassword = await bcrypt.hash("testpassword", 10); // 10 is the salt rounds

    const newUser = await prisma.user.create({
      // data: {
      //   email: "kausar13n@gmail.com",
      //   name: "Kausar Ansar",
      //   password: hashedPassword,
      //   roleId: 1
      // }
      data: {
        id: 1,
        name: "Admin"
      }
    });

    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createNewUser();
