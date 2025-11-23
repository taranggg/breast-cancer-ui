export default function InfoSections() {
  return (
    <section id="learn-more" className="w-full relative py-16 px-0">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-12">
          Learn About Breast Cancer
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              What is Breast Cancer?
            </h3>
            <p className="text-muted-foreground">
              Breast cancer is when cells in the breast grow abnormally. Some
              lumps are benign (not cancer), while others can be malignant
              (cancerous). Many breast lumps are <strong>not</strong> cancerous,
              but it’s important to check with a doctor.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Signs & Symptoms
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Lump or thickening in the breast or underarm</li>
              <li>Changes in size or shape</li>
              <li>Skin dimpling, redness, or scaling</li>
              <li>Nipple changes or unusual discharge</li>
              <li className="mt-2 text-sm text-muted-foreground">
                Not all symptoms mean cancer, but they should be checked by a
                doctor.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              How to Prevent / Lower Risk
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Maintain a healthy weight & exercise regularly</li>
              <li>Limit alcohol & avoid smoking</li>
              <li>Breastfeeding may help lower risk</li>
              <li>Know your family history & get regular screenings</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              How is Breast Cancer Diagnosed?
            </h3>
            <p className="text-muted-foreground">
              Doctors use clinical breast exams, mammography, ultrasound, and
              sometimes biopsy to diagnose breast cancer.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Note:</strong> This AI tool is only a supportive screening
              aid, <strong>not</strong> a diagnosis.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Treatment & Support
            </h3>
            <p className="text-muted-foreground">
              Treatment options include surgery, radiation, chemotherapy,
              hormone therapy, and targeted therapy.
            </p>
            <p className="text-muted-foreground">
              Emotional support is important—consider joining support groups or
              talking to loved ones.
            </p>
            <a
              href="#"
              className="inline-block mt-2 text-pink-500 underline text-sm"
            >
              Find Support Resources
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Self-Check & Early Screening
            </h3>
            <ol className="list-decimal pl-6 text-muted-foreground">
              <li>Get familiar with your normal look and feel</li>
              <li>Perform monthly self-checks</li>
              <li>Notice changes in shape, skin, or nipple</li>
              <li>Discuss screening schedule with your doctor</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
