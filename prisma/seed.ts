const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("testpassword", 10);
  const roles = [{ name: "Admin" }, { name: "User" }];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {}, // No updates needed
      create: {
        name: role.name
      }
    });
  }

  // Step 2: Fetch Roles
  const adminRole = await prisma.role.findUnique({
    where: { name: "Admin" }
  });
  const userRole = await prisma.role.findUnique({
    where: { name: "User" }
  });

  // Step 3: Create Users
  if (adminRole) {
    await prisma.user.upsert({
      where: { email: "admin@example.com" },
      update: {}, // No updates needed
      create: {
        email: "admin@example.com",
        name: "Admin User",
        password: hashedPassword,
        roleId: adminRole.id
      }
    });
  }

  if (userRole) {
    await prisma.user.upsert({
      where: { email: "user@example.com" },
      update: {}, // No updates needed
      create: {
        email: "user@example.com",
        name: "Regular User",
        password: hashedPassword,
        roleId: userRole.id
      }
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
