import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const providerData = req.body;

    const filePath = path.join(process.cwd(), 'public', 'data', 'providers.json');

    try {
      // Read the existing providers data
      const existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      
      // Add new provider data
      existingData.push(providerData);

      // Save the updated data back to the file
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

      res.status(200).json({ message: 'Provider submitted successfully' });
    } catch (error) {
      console.error('Error saving provider data:', error);
      res.status(500).json({ message: 'Error saving provider data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
