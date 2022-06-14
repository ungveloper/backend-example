/*
  Warnings:

  - Added the required column `avatar` to the `Tests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tests` ADD COLUMN `avatar` VARCHAR(191) NOT NULL;
