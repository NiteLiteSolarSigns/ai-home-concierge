// File: api/providers/list.js

export default function handler(req, res) {
  const mockProviders = [
    {
      name: "Green Thumb Landscaping",
      category: "Landscaping",
      distance: "0.7 miles",
      summary: "Full-service lawn and garden care.",
      phone: "555-123-4567",
      logo: "https://via.placeholder.com/80"
    },
    {
      name: "Bright Plumbing Co.",
      category: "Plumbing",
      distance: "1.2 miles",
      summary: "Emergency plumbing & water heater repair.",
      phone: "555-234-5678",
      logo: "https://via.placeholder.com/80"
    },
    {
      name: "Joe’s Electric",
      category: "Electrical",
      distance: "2.0 miles",
      summary: "Licensed electrician for residential repairs.",
      phone: "555-345-6789",
      logo: "https://via.placeholder.com/80"
    }
  ];

  res.status(200).json(mockProviders);
}
