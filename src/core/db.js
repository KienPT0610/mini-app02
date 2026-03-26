// @shared core/db.js — Database init + seed
import * as SQLite from "expo-sqlite";

let _db = null;

export function getDatabase() {
  if (!_db) _db = SQLite.openDatabaseSync("shopease5.db");
  return _db;
}

let _initPromise = null;
export async function initDatabase() {
  if (_initPromise) return _initPromise;

  _initPromise = (async () => {
    const db = getDatabase();
    // Tạo bảng nếu chưa tồn tại
  })();
  return _initPromise;
}

let _isSeeding = false;
let _seedPromise = null;
export async function seedData() {
  if (_seedPromise) return _seedPromise;

  _seedPromise = (async () => {
    const db = getDatabase();
    // Kiểm tra đã seed chưa
    const countRow = await db.getFirstAsync("SELECT COUNT(*) as c FROM Users");
    if (countRow && countRow.c > 0) return;

    // Thêm dữ liệu mẫu
  })();
  return _seedPromise;
}
