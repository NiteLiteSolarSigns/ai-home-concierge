export default function handler(req, res) {
  res.status(200).json([
    {
      user: "Max Homeowner",
      suggestion: "Would love to see some dog walker offers.",
      category: "Pets"
    },
    {
      user: "Jess Investor",
      suggestion: "Needs handyman contacts.",
      category: "Maintenance"
    }
  ]);
}
