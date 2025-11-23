"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "@/util/axiosInstance";
import { API_PATH } from "@/util/apiPath";
import PredictionBackground from "@/components/predict/prediction-background";
import ResultSummary from "@/components/result/result-summary";
import { mockResult } from "@/lib/mock-result";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (data) {
      try {
        setResult(JSON.parse(data));
      } catch {
        setResult(null);
      }
    } else {
      setLoading(true);
      axiosInstance
        .get(API_PATH.Result)
        .then((response) => {
          setResult(response.data);
        })
        .catch(() => {
          setError("Failed to fetch result data.");
        })
        .finally(() => {
          setLoading(false);
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
