export default function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({ message: "Branding updated successfully!" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
