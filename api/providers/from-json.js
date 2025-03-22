import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'providers.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const providers = JSON.parse(data);
    res.status(200).json(providers);
  } catch (error) {
    console.error('Error reading providers:', error);
    res.status(500).json({ message: 'Failed to load provider data' });
  }
}
