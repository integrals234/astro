CREATE TYPE "AppLanguage" AS ENUM ('en', 'hi', 'ja', 'ko');

ALTER TABLE "User" ADD COLUMN "appLanguage" "AppLanguage";
