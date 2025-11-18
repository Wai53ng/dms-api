-- CreateTable
CREATE TABLE `address` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `branchId` BIGINT NULL,
    `line1` VARCHAR(100) NOT NULL,
    `line2` VARCHAR(100) NULL,
    `line3` VARCHAR(100) NULL,
    `postcode` VARCHAR(10) NOT NULL,
    `cityId` BIGINT NOT NULL,
    `stateId` BIGINT NOT NULL,
    `countryId` BIGINT NOT NULL,
    `createdBy` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedBy` VARCHAR(15) NULL,
    `updatedAt` DATETIME(0) NULL,
    `version` VARCHAR(50) NOT NULL,

    INDEX `fk_address_cityId`(`cityId`),
    INDEX `fk_address_countryId`(`countryId`),
    INDEX `fk_address_stateId`(`branchId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `branch` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(6) NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `companyId` BIGINT NOT NULL,
    `headquarter` BOOLEAN NULL DEFAULT false,
    `status` VARCHAR(1) NULL DEFAULT 'A',
    `createdBy` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedBy` VARCHAR(15) NULL,
    `updatedAt` DATETIME(0) NULL,
    `version` VARCHAR(50) NOT NULL,

    INDEX `fk_branch_companyId`(`companyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `city` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(6) NOT NULL,
    `name` VARCHAR(60) NOT NULL,
    `postcode` VARCHAR(10) NOT NULL,
    `stateId` BIGINT NOT NULL,
    `createdBy` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedBy` VARCHAR(15) NULL,
    `updatedAt` DATETIME(0) NULL,
    `version` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(6) NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `fullName` VARCHAR(100) NOT NULL,
    `registrationNo` VARCHAR(20) NOT NULL,
    `foundedDate` DATE NOT NULL,
    `website` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `contactNumber` VARCHAR(15) NOT NULL,
    `fax` VARCHAR(15) NOT NULL,
    `countryId` BIGINT NOT NULL,
    `createdBy` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedBy` VARCHAR(15) NULL,
    `updatedAt` DATETIME(0) NULL,
    `version` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `code`(`code`),
    INDEX `fk_company_countryId`(`countryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(6) NOT NULL,
    `name` VARCHAR(60) NOT NULL,
    `createdBy` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedBy` VARCHAR(15) NULL,
    `updatedAt` DATETIME(0) NULL,
    `version` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `code`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `department` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(6) NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `remarks` VARCHAR(500) NULL,
    `status` VARCHAR(1) NULL DEFAULT 'A',
    `createdBy` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedBy` VARCHAR(15) NULL,
    `updatedAt` DATETIME(0) NULL,
    `version` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `code`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(6) NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `remarks` VARCHAR(500) NULL,
    `createdBy` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedBy` VARCHAR(15) NULL,
    `updatedAt` DATETIME(0) NULL,
    `version` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `code`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `state` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(6) NOT NULL,
    `name` VARCHAR(60) NOT NULL,
    `countryId` BIGINT NOT NULL,
    `createdBy` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedBy` VARCHAR(15) NULL,
    `updatedAt` DATETIME(0) NULL,
    `version` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(15) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `status` VARCHAR(1) NULL DEFAULT 'A',
    `loginAttempt` SMALLINT NULL DEFAULT 0,
    `lastLoginDate` DATETIME(0) NULL,
    `createdBy` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedBy` VARCHAR(15) NULL,
    `updatedAt` DATETIME(0) NULL,
    `version` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `username`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_profile` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `userId` BIGINT NOT NULL,
    `branchId` BIGINT NOT NULL,
    `departmentId` BIGINT NOT NULL,
    `roleId` BIGINT NOT NULL,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `fullName` VARCHAR(101) NULL,
    `type` VARCHAR(1) NOT NULL,
    `gender` VARCHAR(1) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `contactNumber` VARCHAR(15) NULL,
    `dateOfBirth` DATE NULL,
    `createdBy` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedBy` VARCHAR(15) NULL,
    `updatedAt` DATETIME(0) NULL,
    `version` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    INDEX `fk_user_profile_branchId`(`branchId`),
    INDEX `fk_user_profile_departmentId`(`departmentId`),
    INDEX `fk_user_profile_roleId`(`roleId`),
    INDEX `fk_user_profile_userId`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `fk_address_branchId` FOREIGN KEY (`branchId`) REFERENCES `branch`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `fk_address_cityId` FOREIGN KEY (`cityId`) REFERENCES `city`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `fk_address_countryId` FOREIGN KEY (`countryId`) REFERENCES `country`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `branch` ADD CONSTRAINT `fk_branch_companyId` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `company` ADD CONSTRAINT `fk_company_countryId` FOREIGN KEY (`countryId`) REFERENCES `country`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_profile` ADD CONSTRAINT `fk_user_profile_branchId` FOREIGN KEY (`branchId`) REFERENCES `branch`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_profile` ADD CONSTRAINT `fk_user_profile_departmentId` FOREIGN KEY (`departmentId`) REFERENCES `department`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_profile` ADD CONSTRAINT `fk_user_profile_roleId` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_profile` ADD CONSTRAINT `fk_user_profile_userId` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
