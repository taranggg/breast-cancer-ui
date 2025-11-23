"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PredictionBackground from "@/components/predict/prediction-background";
import ResultSummary from "@/components/result/result-summary";

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

export default function ResultPage() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  const [result, setResult] = useState<ResultType | null>(null);
  const [loading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (data) {
      try {
        const parsed: ResultType = JSON.parse(data);
        setResult(parsed);
        setError("");
      } catch {
        setResult(null);
        setError("Invalid result data format.");
      }
    } else {
      setResult(null);
      setError("");
    }
  }, [data]);

  return (
    <PredictionBackground>
      {loading ? (
        <div className="flex items-center justify-center min-h-[200px]">
          Loading...
        </div>
      ) : error ? (
        <div className="flex items-center justify-center min-h-[200px] text-red-500">
          {error}
        </div>
      ) : result ? (
        <ResultSummary result={result} />
      ) : (
        <div className="flex items-center justify-center min-h-[200px] text-gray-500">
          No result available.
        </div>
      )}
    </PredictionBackground>
  );
}
