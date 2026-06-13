-- CreateTable
CREATE TABLE "SavedChart" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "formData" JSONB NOT NULL,
    "chartData" JSONB NOT NULL,
    "isSaved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavedChart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SavedChart_userId_createdAt_idx" ON "SavedChart"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "SavedChart_userId_isSaved_idx" ON "SavedChart"("userId", "isSaved");

-- AddForeignKey
ALTER TABLE "SavedChart" ADD CONSTRAINT "SavedChart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
