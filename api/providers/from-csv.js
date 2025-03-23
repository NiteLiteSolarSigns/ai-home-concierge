import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export default async function handler(req, res) {
  try {
    const csvPath = path.join(process.cwd(), 'public', 'data', 'providers.csv');
    const csvData = fs.readFileSync(csvPath);
    const records = parse(csvData, {
      columns: true,
      skip_empty_lines: true
    });

    res.status(200).json(records);
  } catch (error) {
    console.error('Error reading CSV:', error);
    res.status(500).json({ message: 'Failed to load provider data' });
  }
}
