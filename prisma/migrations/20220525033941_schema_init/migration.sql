-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'TEACHER');

-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'STUDENT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "ClassWork" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "user_uid" TEXT NOT NULL,
    "class_uid" TEXT NOT NULL,
    "mark" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClassWork_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Class" (
    "uid" TEXT NOT NULL,
    "admin_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "invite_code" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "uid" TEXT NOT NULL,
    "author_uid" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "class_uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Comment" (
    "uid" TEXT NOT NULL,
    "announcement_uid" TEXT,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ClassWork" ADD CONSTRAINT "ClassWork_user_uid_fkey" FOREIGN KEY ("user_uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassWork" ADD CONSTRAINT "ClassWork_class_uid_fkey" FOREIGN KEY ("class_uid") REFERENCES "Class"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_author_uid_fkey" FOREIGN KEY ("author_uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_class_uid_fkey" FOREIGN KEY ("class_uid") REFERENCES "Class"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_announcement_uid_fkey" FOREIGN KEY ("announcement_uid") REFERENCES "Announcement"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
