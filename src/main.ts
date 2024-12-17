const DB_ID: string =
  PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
const SS_NAME: string = "scraping_data";

const db = SpreadSheetsSQL.open(DB_ID, SS_NAME);

interface get

const doGet = (e) => {
  const path: string = e?.parameter.page;

  let data: string[] = getDB();

  return ContentService.createTextOutput(JSON.stringify({"data": data})).setMimeType(ContentService.MimeType.JSON);
};

function getDB() {
  let data: string[] = db
    .select(["paper_id", "title", "abstract", "category_list", "url", "upload_date"])
    .result();

  return data;
}
