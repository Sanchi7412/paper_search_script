const DB_ID: string =
  PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
const SS_NAME: string = "scraping_data";

const db = SpreadSheetsSQL.open(DB_ID, SS_NAME);

function main() {
  console.log("Hello, World!");
    let test_data = getDB()

    console.log(test_data)
    console.log(JSON.parse(test_data))
}
const doPost = (e) => {
  const path: string = e?.parameter.path;

  if (path == "getDB") {
    return getDB();
  }
};

function getDB() {
  let data: string[] = db
    .select(["paper_id", "title", "abstract", "category_list", "upload_date"])
    .result();
  console.log(data);

  return ContentService.createTextOutput(JSON.stringify(data));
}
