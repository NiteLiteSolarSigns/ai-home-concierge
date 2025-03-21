export default function handler(req, res) {
  res.status(200).json([
    {
      name: "John Doe",
      email: "john@example.com",
      message: "Just moved in, love the setup!",
      category: "New Homeowner"
    },
    {
      name: "Sally Realtor",
      email: "sally@re.com",
      message: "Can we co-brand a listing?",
      category: "Business Inquiry"
    }
  ]);
}
