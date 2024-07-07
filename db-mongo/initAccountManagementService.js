db = db.getSiblingDB("banking");

db.createCollection("accounts");
db.accounts.createIndex({ email: 1 }, { unique: true });

db.accounts.insertMany([
  { name: "John Doe", email: "john.doe@example.com", balance: 1000 },
  { name: "Jane Smith", email: "jane.smith@example.com", balance: 2000 },
]);
