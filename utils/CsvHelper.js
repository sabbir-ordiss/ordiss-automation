const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

class CsvHelper {
  /**
   * Reads a CSV file from the 'data' directory and returns an array of objects.
   * @param {string} fileName - The name of the file (e.g., 'unitTypes.csv')
   */
  static readCsv(fileName) {
    const filePath = path.join(__dirname, '..', 'data', fileName);
    const fileContent = fs.readFileSync(filePath);

    // Parse CSV: 'columns: true' treats the first row as headers
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });
    return records;
  }
}

module.exports = CsvHelper;
