"use client";
import React, { useState, useEffect, useMemo } from "react";
import { DottedGlowBackground } from "../ui/dotted-glow-background";

export default function AboutProjectSection() {
  const features = useMemo(
    () => [
      {
        key: "ai",
        label: "Smart AI Risk Analysis",
        short: "AI-powered",
        detail:
          "Our platform uses advanced AI models to analyze your health and lifestyle inputs, providing instant, personalized risk screening for breast cancer.",
      },
      {
        key: "screening",
        label: "Screening",
        short: "Instant Screening",
        detail:
          "Get quick, easy-to-understand results based on your inputs. The screening tool encourages early awareness and helps you take proactive steps.",
      },
      {
        key: "education",
        label: "Education",
        short: "Education Hub",
        detail:
          "Access educational sections about breast cancer, prevention, and support. Stay informed with up-to-date resources and guidance.",
      },
      {
        key: "privacy",
        label: "Privacy",
        short: "Privacy First",
        detail:
          "Your privacy is our priority. No personal data is stored, and all results are for educational purposes only.",
      },
      {
        key: "support",
        label: "Support",
        short: "Get Support",
        detail:
          "Find links to support groups, resources, and guidance for emotional and practical help throughout your breast cancer journey.",
      },
    ],
    []
  );

  const [selected, setSelected] = useState<string>(features[0].key);

  useEffect(() => {
    const idx = features.findIndex((f) => f.key === selected);
    const timer = setTimeout(() => {
      setSelected(features[(idx + 1) % features.length].key);
    }, 6000);
    return () => clearTimeout(timer);
  }, [selected, features]);
  return (
    <section id="about-project" className="w-full relative py-16 px-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col gap-8 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-2">
            About This Website.
          </h2>
          <p className="text-lg text-muted-foreground">
            This website is an AI-powered breast cancer risk screening tool
            designed to help users assess their risk based on simple health and
            lifestyle inputs. It aims to raise awareness, encourage early
            screening, and provide educational resources about breast cancer.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {features.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`px-4 py-1 rounded-full text-sm font-medium bg-teal-700/40 border border-teal-400 text-white shadow backdrop-blur-md transition-all duration-200 ${
                  selected === f.key
                    ? "ring-2 ring-teal-400"
                    : "hover:bg-teal-700/60 hover:text-teal-100"
                }`}
                onClick={() => setSelected(f.key)}
              >
                {f.short}
              </button>
            ))}
          </div>
          {selected && (
            <div className="w-full flex justify-start mb-4 relative">
              <div className="bg-teal-700/20 border border-teal-900 rounded-xl p-6 w-full max-w-xs md:max-w-md lg:max-w-xl min-w-[220px] min-h-[120px] h-[clamp(120px,18vw,160px)] text-left shadow-lg backdrop-blur-xl relative overflow-hidden flex flex-col justify-center">
                <DottedGlowBackground
                  className="absolute inset-0 z-0"
                  gap={16}
                  radius={2.5}
                  color="rgba(13,148,136,0.22)"
                  glowColor="rgba(13,148,136,0.45)"
                  opacity={0.7}
                  backgroundOpacity={0}
                />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-teal-700 mb-2">
                    {features.find((f) => f.key === selected)?.label}
                  </h3>
                  <p className="text-neutral-600">
                    {features.find((f) => f.key === selected)?.detail}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="w-full flex justify-start mb-6">
            <div className="w-full h-px bg-pink-800/40" />
          </div>
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-pink-700 mb-2">
                  How it works
                </h3>
                <ul className="pl-6 space-y-2 text-base text-neutral-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500 inline-block" />
                    <span>
                      Enter basic health and lifestyle information in the
                      prediction form.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500 inline-block" />
                    <span>
                      Our AI model instantly analyzes your inputs for risk
                      screening.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500 inline-block" />
                    <span>
                      Receive a personalized risk estimate and helpful guidance.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500 inline-block" />
                    <span>
                      No personal data is stored; results are for educational
                      purposes only.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <div className="bg-pink-200/30 border border-pink-300 rounded-xl shadow-lg p-6 w-full max-w-sm text-left backdrop-blur-xl relative">
                  <h3 className="text-lg font-bold text-pink-600 mb-2 z-10 relative">
                    Our Vision
                  </h3>
                  <p className="text-base text-pink-700 mb-4 z-10 relative">
                    <span className="font-semibold">Empower</span> everyone with
                    accessible, AI-driven breast cancer risk screening and
                    education.
                    <br />
                    <span className="font-semibold">
                      We aim to raise awareness
                    </span>
                    , encourage early action, and support users with trusted
                    resources.
                  </p>
                  <div
                    className="absolute inset-0 pointer-events-none rounded-xl z-0"
                    style={{
                      background:
                        "radial-gradient(circle at 60% 40%, #f9a8d4 20%, transparent 80%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <div className="rounded-xl bg-pink-50/10 border border-pink-200 text-pink-700 px-6 py-4 shadow backdrop-blur-xl text-center">
                <strong>Disclaimer:</strong> This AI tool is not a medical
                device. It is for educational and awareness purposes only.
                Always consult a qualified healthcare professional for diagnosis
                and treatment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
