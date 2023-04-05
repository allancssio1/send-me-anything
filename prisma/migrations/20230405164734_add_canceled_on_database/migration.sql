-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "canceled" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_products" ("createdAt", "description", "id", "name", "recipientId", "senderId", "updatedAt") SELECT "createdAt", "description", "id", "name", "recipientId", "senderId", "updatedAt" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
