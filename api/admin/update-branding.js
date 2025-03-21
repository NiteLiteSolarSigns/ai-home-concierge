// File: /api/admin/update-branding.js

let branding = {
  logo: "",
  color: "",
  tagline: ""
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { logo, color, tagline } = req.body;
    branding = { logo, color, tagline };
    return res.status(200).json({ message: "Branding updated!", branding });
  }

  if (req.method === "GET") {
    return res.status(200).json(branding);
  }

  return res.status(405).json({ message: "Method not allowed" });
}

