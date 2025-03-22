import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';

export default async function handler(req, res) {
  const results = [];
  const filePath = path.join(process.cwd(), 'public/data/providers.csv');

  try {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        res.status(200).json(results);
      });
  } catch (error) {
    console.error('Error reading providers:', error);
    res.status(500).json({ message: 'Failed to load provider data' });
  }
}
