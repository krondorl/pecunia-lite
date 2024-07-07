db = db.getSiblingDB("banking");

db.createCollection("transactions");
db.transactions.createIndex({ accountId: 1 });
db.transactions.createIndex({ timestamp: 1 });

db.transactions.insertMany([
  {
    accountId: "1",
    type: "deposit",
    amount: 500,
    timestamp: new Date().toISOString(),
  },
  {
    accountId: "2",
    type: "withdrawal",
    amount: 300,
    timestamp: new Date().toISOString(),
  },
]);
