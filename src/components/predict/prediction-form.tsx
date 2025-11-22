"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { FileUpload } from "@/components/ui/file-upload"; // Custom wrapper for file input

const PREDICTION_API_URL = "http://localhost:8000/predict";

export default function PredictionForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    image: null as File | null,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Validate form fields
  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (
      !form.age ||
      isNaN(Number(form.age)) ||
      Number(form.age) < 18 ||
      Number(form.age) > 90
    )
      newErrors.age = "Age must be between 18 and 90.";
    if (!form.gender) newErrors.gender = "Gender is required.";
    if (!form.image) newErrors.image = "Image is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // Handle file upload and preview
  function handleFileChange(files: File[]) {
    const file = files[0] || null;
    setForm((f) => ({ ...f, image: file }));
    setErrors((e) => ({ ...e, image: "" }));
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  }

  // Handle form submit
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;

    setLoading(true);

    // Construct FormData for multipart/form-data
    const data = new FormData();
    data.append("name", form.name);
    data.append("age", form.age);
    data.append("gender", form.gender);
    if (form.image) data.append("image", form.image);

    try {
      // Call the prediction API
      const res = await fetch(PREDICTION_API_URL, {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("API error");
      const result = await res.json();

      // Pass result to /result page via query param (can use global store if preferred)
      router.push(`/result?data=${encodeURIComponent(JSON.stringify(result))}`);
    } catch (err) {
      setApiError("Something went wrong while predicting. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="max-w-lg mx-auto mt-12 mb-12 p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-lg">
      <h2 className="text-2xl font-bold text-foreground mb-2">
        AI-Powered Breast Scan Check
      </h2>
      <p className="text-muted-foreground mb-6">
        Fill in your details and upload your breast scan image (like a
        mammogram). Our AI model will estimate whether the image looks normal,
        benign, or malignant.
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        aria-label="Prediction form"
      >
        {/* Name */}
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <span id="name-error" className="text-red-500 text-xs mt-1">
              {errors.name}
            </span>
          )}
        </div>
        {/* Age */}
        <div>
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            min={18}
            max={90}
            placeholder="Enter your age"
            value={form.age}
            onChange={(e) => setForm((f) => ({ ...f, age: e.target.value }))}
            aria-invalid={!!errors.age}
            aria-describedby={errors.age ? "age-error" : undefined}
            required
          />
          {errors.age && (
            <span id="age-error" className="text-red-500 text-xs mt-1">
              {errors.age}
            </span>
          )}
        </div>
        {/* Gender */}
        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select
            value={form.gender}
            onValueChange={(val) => setForm((f) => ({ ...f, gender: val }))}
            required
          >
            <SelectTrigger
              id="gender"
              aria-invalid={!!errors.gender}
              aria-describedby={errors.gender ? "gender-error" : undefined}
            >
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
              <SelectItem value="Prefer not to say">
                Prefer not to say
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <span id="gender-error" className="text-red-500 text-xs mt-1">
              {errors.gender}
            </span>
          )}
        </div>
        {/* Image Upload */}
        <div>
          <Label htmlFor="image">Breast Scan Image</Label>
          <FileUpload onChange={handleFileChange} />
          <div className="text-xs text-muted-foreground mt-2">
            Your image is processed securely for prediction only and not stored
            permanently.
          </div>
          {imagePreview && (
            <Image
              src={imagePreview}
              alt="Preview"
              width={128}
              height={128}
              className="mt-2 rounded-xl border w-32 h-32 object-cover"
            />
          )}
          {errors.image && (
            <span id="image-error" className="text-red-500 text-xs mt-1">
              {errors.image}
            </span>
          )}
        </div>
        {/* Error Alert */}
        {apiError && (
          <Alert variant="destructive" className="text-red-600">
            {apiError}
          </Alert>
        )}
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            type="submit"
            className="rounded-xl bg-pink-500 text-white shadow hover:bg-pink-400 w-full sm:w-auto"
            disabled={loading}
          >
            {loading ? "Analyzing your image…" : "Predict"}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="rounded-xl w-full sm:w-auto"
            onClick={() => router.push("/")}
            disabled={loading}
          >
            Back to Home
          </Button>
        </div>
      </form>
    </Card>
  );
}
