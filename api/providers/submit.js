export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const provider = req.body;

  console.log("New provider submission:", provider);

  return res.status(200).json({ message: "Submission received", provider });
}
