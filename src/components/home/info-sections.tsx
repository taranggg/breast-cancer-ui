import { Card } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

const sections = [
  {
    title: "What is Breast Cancer?",
    content: (
      <>
        <p>
          Breast cancer is when cells in the breast grow abnormally. Some lumps
          are benign (not cancer), while others can be malignant (cancerous).
          Many breast lumps are <strong>not</strong> cancerous, but it’s
          important to check with a doctor.
        </p>
      </>
    ),
    icon: "🎀",
  },
  {
    title: "Signs & Symptoms",
    content: (
      <ul className="list-disc pl-5">
        <li>Lump or thickening in the breast or underarm</li>
        <li>Changes in size or shape</li>
        <li>Skin dimpling, redness, or scaling</li>
        <li>Nipple changes or unusual discharge</li>
        <li className="mt-2 text-muted-foreground text-sm">
          Not all symptoms mean cancer, but they should be checked by a doctor.
        </li>
      </ul>
    ),
    icon: "🔍",
  },
  {
    title: "How to Prevent / Lower Risk",
    content: (
      <ul className="list-disc pl-5">
        <li>Maintain a healthy weight & exercise regularly</li>
        <li>Limit alcohol & avoid smoking</li>
        <li>Breastfeeding may help lower risk</li>
        <li>Know your family history & get regular screenings</li>
      </ul>
    ),
    icon: "🌱",
  },
  {
    title: "How is Breast Cancer Diagnosed?",
    content: (
      <>
        <p>
          Doctors use clinical breast exams, mammography, ultrasound, and
          sometimes biopsy to diagnose breast cancer.
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          <strong>Note:</strong> This AI tool is only a supportive screening
          aid, <strong>not</strong> a diagnosis.
        </p>
      </>
    ),
    icon: "🩺",
  },
  {
    title: "Treatment & Support",
    content: (
      <>
        <p>
          Treatment options include surgery, radiation, chemotherapy, hormone
          therapy, and targeted therapy.
        </p>
        <p>
          Emotional support is important—consider joining support groups or
          talking to loved ones.
        </p>
        <a
          href="#"
          className="inline-block mt-2 text-pink-500 underline text-sm"
        >
          Find Support Resources
        </a>
      </>
    ),
    icon: "🤗",
  },
  {
    title: "Self-Check & Early Screening",
    content: (
      <ol className="list-decimal pl-5">
        <li>Get familiar with your normal look and feel</li>
        <li>Perform monthly self-checks</li>
        <li>Notice changes in shape, skin, or nipple</li>
        <li>Discuss screening schedule with your doctor</li>
      </ol>
    ),
    icon: "🫶",
  },
];

export default function InfoSections() {
  return (
    <section id="learn-more" className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
        Learn About Breast Cancer
      </h2>
      <div className="grid gap-8">
        {sections.map((section, idx) => (
          <Card
            key={section.title}
            className="p-6 rounded-2xl bg-muted/40 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{section.icon}</span>
              <h3 className="text-lg font-semibold text-foreground">
                {section.title}
              </h3>
            </div>
            <div className="text-muted-foreground">{section.content}</div>
          </Card>
        ))}
        {/* Disclaimer Section */}
        <Alert
          variant="default"
          className="mt-6 rounded-xl bg-pink-50 border-pink-200 text-pink-700 shadow"
        >
          <span>
            <strong>Disclaimer:</strong> This AI tool is not a medical device.
            It is for educational and awareness purposes only. Always consult a
            qualified healthcare professional for diagnosis and treatment.
          </span>
        </Alert>
      </div>
    </section>
  );
}
