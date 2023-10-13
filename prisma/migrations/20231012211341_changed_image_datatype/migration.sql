-- CreateTable
CREATE TABLE "movies" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);
