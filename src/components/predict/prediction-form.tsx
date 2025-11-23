"use client";

import { useState } from "react";
import axiosInstance from "@/util/axiosInstance";
import { API_PATH } from "@/util/apiPath";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { Trash2 } from "lucide-react";

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
import { FileUpload } from "@/components/ui/file-upload";
import { LoaderThree } from "@/components/ui/loader";
import { log } from "console";

type FormValues = {
  name: string;
  age: number | string;
  gender: string;
  image: File | null;
};

export default function PredictionForm() {
  const router = useRouter();
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0); // 👈 to reset FileUpload

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      image: null,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setApiError("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("age", String(data.age));
      formData.append("gender", data.gender);
      if (data.image) {
        formData.append("image", data.image);
      }

      const response = await axiosInstance.post(API_PATH.Predict, formData);
      // Combine frontend form data with API response
      const apiResult = response.data;
      // Find highest probability for prediction
      const predictionKey = Object.keys(apiResult).reduce((a, b) =>
        apiResult[a] > apiResult[b] ? a : b
      );
      const result = {
        name: data.name,
        age: data.age,
        gender: data.gender,
        prediction:
          predictionKey.charAt(0).toUpperCase() + predictionKey.slice(1),
        probabilities: {
          benign: apiResult.benign,
          malignant: apiResult.malignant,
          normal: apiResult.normal,
        },
      };
      router.push(`/result?data=${encodeURIComponent(JSON.stringify(result))}`);
    } catch (err) {
      console.error(err);
      setApiError("Something went wrong while predicting. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4 py-10">
        <LoaderThree />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-xl rounded-3xl border border-white/60 bg-white/35 shadow-[0_18px_45px_rgba(148,163,184,0.35)] backdrop-blur-2xl px-6 py-7 sm:px-8 sm:py-9">
        <div className="mb-6 text-center space-y-2">
          <span className="inline-flex items-center rounded-full bg-pink-100/80 px-4 py-1 text-[11px] font-medium text-pink-700 shadow-sm">
            💗 Gentle AI support · Not a diagnosis
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-2">
            AI-Powered Breast Scan Check
          </h2>
          <p className="text-sm sm:text-[15px] text-muted-foreground max-w-md mx-auto">
            Fill in your details and upload your breast scan image (like a
            mammogram). Our AI model will estimate whether the image looks{" "}
            <span className="font-medium">normal</span>,{" "}
            <span className="font-medium">benign</span>, or{" "}
            <span className="font-medium">malignant</span>.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          aria-label="Prediction form"
          noValidate
        >
          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-sm font-medium text-pink-900">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="h-12 rounded-xl border-pink-100 bg-white/80 px-4 focus-visible:ring-pink-300"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name", {
                required: "Name is required.",
              })}
            />
            {errors.name && (
              <span
                id="name-error"
                className="text-red-500 text-xs mt-0.5 block"
              >
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Age + Gender row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Age */}
            <div className="space-y-1.5">
              <Label
                htmlFor="age"
                className="text-sm font-medium text-pink-900"
              >
                Age
              </Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                className="h-12 rounded-xl border-pink-100 bg-white/80 px-4 focus-visible:ring-pink-300"
                aria-invalid={!!errors.age}
                aria-describedby={errors.age ? "age-error" : undefined}
                {...register("age", {
                  required: "Age is required.",
                  min: { value: 18, message: "Age must be at least 18." },
                  max: { value: 90, message: "Age must be 90 or below." },
                })}
              />
              {errors.age && (
                <span
                  id="age-error"
                  className="text-red-500 text-xs mt-0.5 block"
                >
                  {errors.age.message}
                </span>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-1.5">
              <Label
                htmlFor="gender"
                className="text-sm font-medium text-pink-900"
              >
                Gender
              </Label>
              <Controller
                name="gender"
                control={control}
                rules={{ required: "Gender is required." }}
                render={({ field }) => (
                  <>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        id="gender"
                        className="h-12 rounded-xl border-pink-100 bg-white/80 px-4 focus-visible:ring-pink-300"
                        aria-invalid={!!errors.gender}
                        aria-describedby={
                          errors.gender ? "gender-error" : undefined
                        }
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
                      <span
                        id="gender-error"
                        className="text-red-500 text-xs mt-0.5 block"
                      >
                        {errors.gender.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-1.5">
            <Label
              htmlFor="image"
              className="text-sm font-medium text-pink-900"
            >
              Breast Scan Image
            </Label>
            <Controller
              name="image"
              control={control}
              rules={{ required: "Image is required." }}
              render={({ field }) => {
                const handleFiles = (files: File[]) => {
                  const file = files[0] || null;
                  field.onChange(file);
                  if (file) {
                    const reader = new FileReader();
                    // reader.onload = (e) =>
                    //   setImagePreview(e.target?.result as string);
                    // reader.readAsDataURL(file);
                    reader.readAsDataURL(file);
                    reader.addEventListener("load", (e) => {
                      setImagePreview(e.target?.result as string);
                    });
                  } else {
                    setImagePreview(null);
                  }
                };

                const handleDeleteImage = () => {
                  // Clear field + preview + reset underlying file input
                  field.onChange(null);
                  setImagePreview(null);
                  setFileInputKey((k) => k + 1);
                };

                return (
                  <>
                    <div className="rounded-2xl border border-dashed border-pink-200 bg-pink-50/70 hover:bg-pink-50/90 transition-colors duration-150 px-3 py-4">
                      <FileUpload key={fileInputKey} onChange={handleFiles} />
                      <div className="text-xs text-muted-foreground mt-2">
                        Your image is processed securely for prediction only and
                        not stored permanently.
                      </div>
                      {imagePreview && (
                        <div className="mt-3 flex items-center justify-center">
                          <div className="relative">
                            <Image
                              src={imagePreview}
                              alt="Preview"
                              width={144}
                              height={144}
                              className="rounded-2xl border border-pink-100 shadow-sm w-36 h-36 object-cover bg-white"
                            />
                            <button
                              type="button"
                              onClick={handleDeleteImage}
                              className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-pink-600 shadow-md hover:bg-pink-50 transition-colors"
                              aria-label="Remove uploaded image"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    {errors.image && (
                      <span
                        id="image-error"
                        className="text-red-500 text-xs mt-0.5 block"
                      >
                        {errors.image.message as string}
                      </span>
                    )}
                  </>
                );
              }}
            />
          </div>

          {/* Error Alert */}
          {apiError && (
            <Alert
              variant="destructive"
              className="text-red-700 bg-red-50 border-red-200 text-xs"
            >
              {apiError}
            </Alert>
          )}

          {/* Predict button */}
          <div className="pt-3 flex justify-center">
            <Button
              type="submit"
              className="w-full sm:w-40 h-11 rounded-2xl border border-pink-200 bg-pink-500/65 text-white font-semibold shadow-[0_10px_30px_rgba(244,114,182,0.55)] backdrop-blur-md hover:bg-pink-500/85 hover:border-pink-300 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Analyzing your image…" : "Predict"}
            </Button>
          </div>

          <p className="text-[11px] text-pink-700 text-center pt-1">
            This tool is for educational purposes only and does not replace
            professional medical advice, diagnosis, or treatment.
          </p>
        </form>
      </Card>
    </div>
  );
}
