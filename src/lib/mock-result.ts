// mock-result.ts

export const mockResult = {
  name: "Jane Doe",
  age: 34,
  gender: "Female",
  image: "/mock-image.png",
  prediction: "Benign",
  probabilities: {
    benign: 92.0,
    malignant: 3.5,
    normal: 4.5,
  },
  confidence: 0.92,
  details:
    "The scan shows benign characteristics. No signs of malignancy detected.",
  timestamp: new Date().toISOString(),
};
