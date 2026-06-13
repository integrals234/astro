-- CreateTable
CREATE TABLE "VedicCourseProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "currentChapter" INTEGER NOT NULL DEFAULT 0,
    "completedSlides" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VedicCourseProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VedicCourseProgress_userId_key" ON "VedicCourseProgress"("userId");

-- AddForeignKey
ALTER TABLE "VedicCourseProgress" ADD CONSTRAINT "VedicCourseProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
