import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const csvFilePath = path.join(process.cwd(), 'public', 'data', 'providers.csv');

  try {
    const results = [];

    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        res.status(200).json(results);
      })
      .on('error', (err) => {
        console.error('CSV read error:', err);
        res.status(500).json({ message: 'Failed to parse CSV file' });
      });

  } catch (error) {
    console.error('Error reading CSV file:', error);
    res.status(500).json({ message: 'Failed to load provider data' });
  }
}
