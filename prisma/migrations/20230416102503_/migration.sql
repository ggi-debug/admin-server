/*
  Warnings:

  - Added the required column `thunb` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `thunb` VARCHAR(191) NOT NULL;
