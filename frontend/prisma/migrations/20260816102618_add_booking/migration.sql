-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('scheduled', 'cancelled', 'completed');

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "offeringId" TEXT NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'scheduled',
    "amountJpy" INTEGER,
    "calBookingUid" TEXT NOT NULL,
    "scheduledAt" TIMESTAMP(3),
    "locale" "AppLanguage",
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_calBookingUid_key" ON "Booking"("calBookingUid");

-- CreateIndex
CREATE INDEX "Booking_status_scheduledAt_idx" ON "Booking"("status", "scheduledAt");

-- CreateIndex
CREATE INDEX "Booking_userId_createdAt_idx" ON "Booking"("userId", "createdAt");
