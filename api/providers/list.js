// File: /api/providers/list.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const filePath = path.join(process.cwd(), 'api', 'data', 'provider_directory.json');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const providers = JSON.parse(fileContents);

    res.status(200).json(providers);
  } catch (error) {
    console.error('Error reading providers:', error);
    res.status(500).json({ message: 'Failed to load provider data' });
  }
}
