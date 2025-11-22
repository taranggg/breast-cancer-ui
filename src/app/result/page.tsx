"use client";
import { useSearchParams } from "next/navigation";
import PredictionBackground from "@/components/predict/prediction-background";
import ResultSummary from "@/components/result/result-summary";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  let result = null;
  try {
    result = data ? JSON.parse(data) : null;
  } catch {
    result = null;
  }

  return (
    <PredictionBackground>
      {result ? (
        <ResultSummary result={result} />
      ) : (
        <div className="max-w-xl mx-auto mt-20 p-8 rounded-2xl bg-muted/40 border shadow text-center">
          <h2 className="text-2xl font-bold mb-4">No result data found</h2>
          <p className="text-muted-foreground mb-6">
            Please submit a prediction first.
          </p>
        </div>
      )}
    </PredictionBackground>
  );
}
