export default function handler(req, res) {
  res.status(200).json([
    {
      provider: "Smith Plumbing Co.",
      review: "Absolutely fantastic work and very responsive.",
      rating: 5,
      reviewer: "Max H."
    },
    {
      provider: "Green Lawn Pros",
      review: "Reliable and affordable service. Highly recommend!",
      rating: 4,
      reviewer: "Sarah T."
    },
    {
      provider: "Bright Electric",
      review: "Solved an issue others couldn’t. Impressed.",
      rating: 5,
      reviewer: "David G."
    }
  ]);
}
