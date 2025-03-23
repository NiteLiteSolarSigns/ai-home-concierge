import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'data', 'providers.csv');
  const results = [];

  try {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        res.status(200).json(results);
      })
      .on('error', (err) => {
        console.error('Stream error:', err);
        res.status(500).json({ message: 'Error reading CSV file' });
      });
  } catch (error) {
    console.error('Catch error:', error);
    res.status(500).json({ message: 'Failed to load provider data' });
  }
}
