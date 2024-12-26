-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    UNIQUE INDEX `Category_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `page` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Page_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pagesection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pageId` INTEGER NOT NULL,
    `sectionId` INTEGER NOT NULL,
    `position` INTEGER NOT NULL,
    `visible` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `PageSection_sectionId_fkey`(`sectionId`),
    UNIQUE INDEX `PageSection_pageId_sectionId_key`(`pageId`, `sectionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `excerpt` VARCHAR(191) NULL,
    `featuredImage` VARCHAR(191) NULL,

    UNIQUE INDEX `Post_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postcategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postId` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,

    INDEX `PostCategory_categoryId_fkey`(`categoryId`),
    UNIQUE INDEX `PostCategory_postId_categoryId_key`(`postId`, `categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posttag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postId` INTEGER NOT NULL,
    `tagId` INTEGER NOT NULL,

    INDEX `PostTag_tagId_fkey`(`tagId`),
    UNIQUE INDEX `PostTag_postId_tagId_key`(`postId`, `tagId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Role_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `section` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('HERO', 'GALLERY', 'SERVICES', 'TESTIMONIALS', 'CONTACT_FORM', 'BLOG_LIST') NOT NULL,
    `content` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Section_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expiresAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_token_key`(`token`),
    INDEX `Session_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tag_name_key`(`name`),
    UNIQUE INDEX `Tag_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `roleId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `User_roleId_fkey`(`roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pagesection` ADD CONSTRAINT `PageSection_pageId_fkey` FOREIGN KEY (`pageId`) REFERENCES `page`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pagesection` ADD CONSTRAINT `PageSection_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `section`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postcategory` ADD CONSTRAINT `PostCategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postcategory` ADD CONSTRAINT `PostCategory_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `posttag` ADD CONSTRAINT `PostTag_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `posttag` ADD CONSTRAINT `PostTag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
