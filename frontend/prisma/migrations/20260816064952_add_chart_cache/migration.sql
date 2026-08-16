-- CreateTable
CREATE TABLE "ChartCache" (
    "key" TEXT NOT NULL,
    "chartData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChartCache_pkey" PRIMARY KEY ("key")
);

-- CreateIndex
CREATE INDEX "ChartCache_createdAt_idx" ON "ChartCache"("createdAt");
