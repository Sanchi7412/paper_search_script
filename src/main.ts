const DB_ID: string =
  PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
const SS_NAME: string = "scraping_data";

const db = SpreadSheetsSQL.open(DB_ID, SS_NAME);

function main() {
  console.log("Hello, World!");
  let test_data = getDB();
}

const doGet = (e) => {
  const path: string = e?.parameter.path;

  let data: string[] = getDB();
  return ContentService.createTextOutput(JSON.stringify(data));
};

function getDB() {
  let data: string[] = db
    .select(["paper_id", "title", "abstract", "category_list", "upload_date"])
    .result();

  return data;
}
