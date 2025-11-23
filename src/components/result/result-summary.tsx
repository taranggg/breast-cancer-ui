// ...existing imports...
import { AnimatedProgressBar } from "./AnimatedProgressBar";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { mockResult } from "@/lib/mock-result";

function getPredictionColor(prediction: string) {
  if (prediction === "Normal") return "text-emerald-600 bg-emerald-50/70";
  if (prediction === "Benign") return "text-teal-600 bg-teal-50/70";
  return "text-amber-700 bg-amber-50/70";
}

function getPredictionMessage(prediction: string) {
  if (prediction === "Normal")
    return "Your scan appears normal according to our AI model. This does not rule out any condition. Keep up with regular screenings and consult your doctor if you notice any changes.";
  if (prediction === "Benign")
    return "Your scan suggests a benign (non-cancerous) pattern according to our AI. Only a healthcare professional can confirm this. Please follow up with your doctor.";
  return "Your scan shows patterns that may need further evaluation. Please contact a healthcare professional as soon as possible for proper diagnosis and tests.";
}

type ResultType = {
  name: string;
  age: number;
  gender: string;
  prediction: string;
  probabilities: {
    benign: number;
    malignant: number;
    normal: number;
  };
};

export default function ResultSummary({ result }: { result?: ResultType }) {
  const router = useRouter();
  const data = result || mockResult;
  const { name, age, gender, prediction, probabilities } = data;
  const [showAccordion, setShowAccordion] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState<string[]>([
    prediction.toLowerCase(),
  ]);

  const handleToggleDetail = (key: string) => {
    setOpenDetails((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 sm:p-8 rounded-3xl border border-white/60 bg-white/30 shadow-[0_18px_45px_rgba(148,163,184,0.35)] backdrop-blur-2xl">
      {/* Remember Alert */}
      <Alert
        variant="default"
        className="mb-6 bg-pink-50/80 border-pink-200 text-pink-700 text-left"
      >
        <span className="block">
          <strong>Remember:</strong> This is not a medical diagnosis. Please
          consult a doctor for confirmation and further guidance.
        </span>
      </Alert>

      {/* Simple Report Section */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <span className="block text-sm font-semibold text-pink-700 mb-1">
            Name
          </span>
          <span className="block text-lg font-medium text-foreground">
            {name}
          </span>
        </div>
        <div>
          <span className="block text-sm font-semibold text-teal-700 mb-1">
            Age
          </span>
          <span className="block text-lg font-medium text-foreground">
            {age}
          </span>
        </div>
        <div>
          <span className="block text-sm font-semibold text-pink-700 mb-1">
            Gender
          </span>
          <span className="block text-lg font-medium text-foreground">
            {gender}
          </span>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Prediction card */}
      <div
        className={`text-center mb-8 ${getPredictionColor(
          prediction
        )} rounded-2xl p-8 border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_14px_35px_rgba(148,163,184,0.35)]`}
      >
        <span className="text-lg font-semibold mb-2 block">
          Overall Prediction
        </span>
        <span className="text-4xl font-extrabold mb-4 block">{prediction}</span>
        <p className="text-muted-foreground text-center mb-4">
          {getPredictionMessage(prediction)}
        </p>
        <Separator className="my-4" />
        <div className="w-full space-y-4">
          {(["benign", "malignant", "normal"] as const).map((key) => {
            const percent = probabilities[key];
            const barColor =
              key === "benign"
                ? "bg-teal-100"
                : key === "malignant"
                ? "bg-amber-100"
                : "bg-emerald-100";
            const textColor =
              key === "benign"
                ? "text-teal-700"
                : key === "malignant"
                ? "text-amber-700"
                : "text-emerald-700";
            return (
              <AnimatedProgressBar
                key={key}
                label={
                  key === "malignant"
                    ? "Malignant"
                    : key.charAt(0).toUpperCase() + key.slice(1)
                }
                percent={percent}
                barColor={barColor}
                textColor={textColor}
              />
            );
          })}
        </div>
      </div>

      {/* Info Bulb Icon & Accordion */}
      <div className="flex items-center gap-2 mb-4">
        <button
          type="button"
          aria-label="What do these terms mean?"
          className="flex items-center gap-2 text-pink-600 hover:text-pink-800 focus:outline-none"
          onClick={() => {
            setShowAccordion((v) => !v);
            setOpenDetails([prediction.toLowerCase()]);
          }}
        >
          <Lightbulb className="w-6 h-6" />
          <span className="font-medium">What do these terms mean?</span>
        </button>
      </div>

      <AnimatePresence>
        {showAccordion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 16 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="mb-6"
          >
            <div className="rounded-xl border border-pink-100 bg-pink-50/80 p-4 text-pink-900 shadow">
              <h3 className="font-semibold mb-2">
                Explanation in simple terms:
              </h3>
              <div className="space-y-2">
                <details
                  open={openDetails.includes("benign")}
                  className="group"
                >
                  <summary
                    className="cursor-pointer font-semibold text-teal-700"
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggleDetail("benign");
                    }}
                  >
                    Benign
                  </summary>
                  <div className="ml-4 text-sm text-teal-900">
                    Benign means the lump or area is not cancer. It is not
                    dangerous and usually does not spread or grow quickly.
                    Doctors may still want to check it, but it is not
                    life-threatening.
                  </div>
                </details>
                <details
                  open={openDetails.includes("malignant")}
                  className="group"
                >
                  <summary
                    className="cursor-pointer font-semibold text-amber-700"
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggleDetail("malignant");
                    }}
                  >
                    Malignant
                  </summary>
                  <div className="ml-4 text-sm text-amber-900">
                    Malignant means cancer is present. This area may grow and
                    spread to other parts of the body. It is important to see a
                    doctor quickly for more tests and treatment.
                  </div>
                </details>
                <details
                  open={openDetails.includes("normal")}
                  className="group"
                >
                  <summary
                    className="cursor-pointer font-semibold text-emerald-700"
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggleDetail("normal");
                    }}
                  >
                    Normal
                  </summary>
                  <div className="ml-4 text-sm text-emerald-900">
                    Normal means the scan looks healthy and does not show signs
                    of cancer or other problems. Regular checkups are still
                    important for your health.
                  </div>
                </details>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <Button
          className="w-full sm:w-auto h-11 rounded-2xl border border-pink-200 bg-pink-500/70 text-white font-semibold shadow-[0_10px_30px_rgba(244,114,182,0.55)] backdrop-blur-md hover:bg-pink-500/85 hover:border-pink-300 disabled:opacity-70 disabled:cursor-not-allowed"
          onClick={() => router.push("/predict")}
        >
          Check Another Image
        </Button>
      </div>

      <Alert
        variant="default"
        className="mt-2 bg-muted/40 border text-muted-foreground text-left"
      >
        <span className="block">
          <strong>Disclaimer:</strong> This AI tool is experimental and for
          educational purposes only. It is not a substitute for screening,
          diagnosis, or treatment by qualified medical professionals.
        </span>
      </Alert>
    </div>
  );
}
