"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, startTransition } from "react";
import axiosInstance from "@/util/axiosInstance";
import { API_PATH } from "@/util/apiPath";
import PredictionBackground from "@/components/predict/prediction-background";
import ResultSummary from "@/components/result/result-summary";
import { mockResult } from "@/lib/mock-result";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (data) {
      let parsed: ResultType | null = null;
      let errorMsg = "";
      try {
        parsed = JSON.parse(data);
      } catch {
        parsed = null;
        errorMsg = "Invalid result data format.";
      }
      startTransition(() => {
        setResult(parsed);
        if (errorMsg) setError(errorMsg);
      });
    } else {
      startTransition(() => {
        setLoading(true);
      });
      axiosInstance
        .get<ResultType>(API_PATH.Result)
        .then((response: { data: ResultType }) => {
          setResult(response.data);
        })
        .catch(() => {
          setError("Failed to fetch result data.");
        })
        .finally(() => {
          startTransition(() => {
            setLoading(false);
          });
        });
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
        <ResultSummary result={mockResult} />
      )}
    </PredictionBackground>
  );
}
