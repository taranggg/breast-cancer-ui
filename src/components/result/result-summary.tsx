import { Card } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

function getPredictionColor(prediction: string) {
  if (prediction === "Normal") return "text-emerald-600 bg-emerald-50";
  if (prediction === "Benign") return "text-teal-600 bg-teal-50";
  return "text-amber-700 bg-amber-50";
}

function getPredictionMessage(prediction: string) {
  if (prediction === "Normal")
    return "Your scan appears normal according to our AI model. This does not rule out any condition. Keep up with regular screenings and consult your doctor if you notice any changes.";
  if (prediction === "Benign")
    return "Your scan suggests a benign (non-cancerous) pattern according to our AI. Only a healthcare professional can confirm this. Please follow up with your doctor.";
  return "Your scan shows patterns that may need further evaluation. Please contact a healthcare professional as soon as possible for proper diagnosis and tests.";
}

export default function ResultSummary({ result }: { result: any }) {
  const router = useRouter();
  const { name, age, gender, probabilities, prediction } = result;

  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-8">
      {/* Top Alert */}
      <Alert
        variant="default"
        className="rounded-xl bg-pink-50 border-pink-200 text-pink-700 shadow"
      >
        <span>
          <strong>Remember:</strong> This is not a medical diagnosis. Please
          consult a doctor for confirmation and further guidance.
        </span>
      </Alert>
      {/* User Summary */}
      <Card className="p-6 rounded-2xl bg-muted/40 border shadow-sm flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <Badge className="bg-pink-100 text-pink-600">Name</Badge>
          <span className="text-foreground font-medium">{name}</span>
        </div>
        <div className="flex gap-4 items-center">
          <Badge className="bg-teal-100 text-teal-600">Age</Badge>
          <span className="text-foreground font-medium">{age}</span>
        </div>
        <div className="flex gap-4 items-center">
          <Badge className="bg-pink-100 text-pink-600">Gender</Badge>
          <span className="text-foreground font-medium">{gender}</span>
        </div>
      </Card>
      {/* Prediction Summary */}
      <Card
        className={`p-8 rounded-3xl border shadow-lg flex flex-col items-center ${getPredictionColor(
          prediction
        )}`}
      >
        <span className="text-lg font-semibold mb-2">Overall Prediction</span>
        <span className="text-4xl font-extrabold mb-4">{prediction}</span>
        <p className="text-muted-foreground text-center mb-4">
          {getPredictionMessage(prediction)}
        </p>
        <Separator className="my-4" />
        {/* Probabilities */}
        <div className="w-full space-y-4">
          {["benign", "malignant", "normal"].map((key) => (
            <div key={key} className="flex items-center gap-4">
              <span className="w-24 font-medium capitalize">
                {key === "malignant"
                  ? "Malignant"
                  : key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
              <Progress
                value={probabilities[key]}
                className={`flex-1 h-4 rounded-full ${
                  key === "benign"
                    ? "bg-teal-100"
                    : key === "malignant"
                    ? "bg-amber-100"
                    : "bg-emerald-100"
                }`}
              />
              <span className="w-12 text-right font-semibold">
                {probabilities[key].toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </Card>
      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <Button
          className="rounded-xl bg-pink-500 text-white shadow hover:bg-pink-400 w-full sm:w-auto"
          onClick={() => router.push("/predict")}
        >
          Check Another Image
        </Button>
        <Button
          variant="outline"
          className="rounded-xl w-full sm:w-auto"
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </div>
      {/* Disclaimer */}
      <Alert
        variant="default"
        className="mt-8 rounded-xl bg-muted/40 border text-muted-foreground shadow"
      >
        <span>
          <strong>Disclaimer:</strong> This AI tool is experimental and for
          educational purposes only. It is not a substitute for screening,
          diagnosis, or treatment by qualified medical professionals.
        </span>
      </Alert>
    </div>
  );
}
