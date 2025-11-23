import { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  children: ReactNode;
};

function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="bg-gradient-to-br from-pink-200/30 to-pink-400/20 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-pink-700 mb-1">{title}</h3>
      {children}
    </div>
  );
}

type StatsCardProps = {
  value: string;
  label: string;
};

function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
      <div className="text-2xl font-bold text-pink-600">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

export default function InfoSections() {
  return (
    <section id="breast-cancer-info" className="w-full relative py-16 px-0">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl md:text-4xl font-bold text-center text-pink-700 mb-12">
          Learn About Breast Cancer.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-start">
          {/* Left main card */}
          <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-10 border border-white/40 flex flex-col gap-10 min-h-[700px] md:min-h-[700px] lg:min-h-[800px] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <h2 className="text-2xl font-bold text-pink-700 mb-2">
              What is Breast Cancer?
            </h2>
            <p className="text-muted-foreground md:text-lg text-foreground mb-6 leading-relaxed">
              Breast cancer is when cells in the breast grow abnormally. Some
              lumps are benign (not cancer), while others can be malignant
              (cancerous). Many breast lumps are{" "}
              <span className="font-bold text-pink-400">not</span> cancerous,
              but it’s important to check with a doctor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <InfoCard title="Signs & Symptoms">
                <ul className="list-disc pl-4 text-muted-foreground text-sm">
                  <li>Lump or thickening in the breast or underarm</li>
                  <li>Changes in breast size or shape</li>
                  <li>Skin dimpling, redness, or scaling</li>
                  <li>Nipple changes or unusual discharge</li>
                  <li className="mt-2">
                    Not all symptoms mean cancer, but they should be checked by
                    a doctor.
                  </li>
                </ul>
              </InfoCard>
              <InfoCard title="How to Prevent Breast Cancer">
                <ul className="list-disc pl-4 text-muted-foreground text-sm">
                  <li>Maintain a healthy weight & exercise regularly</li>
                  <li>Limit alcohol & avoid smoking</li>
                  <li>Breastfeeding may help lower risk</li>
                  <li>Know your family history & get regular screenings</li>
                </ul>
              </InfoCard>
              <InfoCard title="How is Breast Cancer Diagnosed?">
                <p className="text-muted-foreground text-sm">
                  Doctors use clinical breast exams, mammography, ultrasound,
                  and sometimes biopsy to diagnose breast cancer.
                </p>
              </InfoCard>
              <InfoCard title="Men Can Get Breast Cancer Too">
                <p className="text-muted-foreground text-sm">
                  While breast cancer is much more common in women, men can also
                  develop breast cancer. Awareness and early detection are
                  important for everyone.
                </p>
              </InfoCard>
            </div>
          </div>
          {/* Right column: stacked cards */}
          <div className="flex flex-col gap-6">
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <StatsCard value="685K" label="annual deaths worldwide" />
              <StatsCard
                value="90%"
                label="5-year survival rate (early stage)"
              />
              <StatsCard value="2.3M" label="new cases per year" />
              <StatsCard value="65%" label="detected at early stage" />
            </div>
            <InfoCard title="Self-Check & Early Screening">
              <ul className="list-disc pl-4 text-sm text-muted-foreground mb-4">
                <li>Get familiar with your normal look and feel</li>
                <li>Perform monthly self-checks</li>
                <li>Notice changes in shape, skin, or nipple</li>
                <li>Discuss screening schedule with your doctor</li>
              </ul>
            </InfoCard>
            <div className="bg-white/20 backdrop-blur rounded-xl p-6">
              <h3 className="text-base font-semibold text-pink-700 mb-2">
                Treatment & Support
              </h3>
              <ul className="list-disc pl-4 text-sm text-muted-foreground mb-4">
                <li>
                  Treatment options include surgery, radiation, chemotherapy,
                  hormone therapy, and targeted therapy.
                </li>
                <li>
                  Emotional support is important—consider joining support groups
                  or talking to loved ones.
                </li>
                <li>Ongoing care, survivorship, and holistic support</li>
              </ul>
              <button className="bg-teal-400/30 border border-teal-300 text-teal-900 rounded-full px-4 py-2 text-sm font-semibold shadow-md backdrop-blur-lg hover:bg-teal-400/50 transition">
                Find Support Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
