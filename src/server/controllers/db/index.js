import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

const adapter = new FileSync("shortlist.json");
const db = low(adapter);

export default db;
