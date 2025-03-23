import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Get the provider data from the request body
    const providerData = req.body;

    // Define the file path for providers.json
    const filePath = path.join(process.cwd(), 'public', 'data', 'providers.json');

    try {
      // Read the existing provider data from providers.json
      const existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      // Add the new provider to the list
      existingData.push(providerData);

      // Write the updated list back to providers.json
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

      // Respond with success
      res.status(200).json({ message: 'Provider submitted successfully' });
    } catch (error) {
      console.error('Error saving provider data:', error);
      res.status(500).json({ message: 'Error saving provider data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
