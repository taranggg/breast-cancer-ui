export default function AboutProjectSection() {
  return (
    <section id="about-project" className="w-full relative py-16 px-0">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-8">
          About This Website
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            This website is an AI-powered breast cancer risk screening tool
            designed to help users assess their risk based on simple health and
            lifestyle inputs. It aims to raise awareness, encourage early
            screening, and provide educational resources about breast cancer.
          </p>
          <p>
            <strong>How it works:</strong> You enter basic information and
            health details into the prediction form. The AI model analyzes your
            inputs and provides a risk estimate, along with helpful guidance and
            resources. No personal data is stored, and results are for
            educational purposes only.
          </p>
          <p>
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Instant risk screening using AI</li>
            <li>Clear, easy-to-understand results</li>
            <li>
              Educational sections about breast cancer, prevention, and support
            </li>
            <li>Modern, privacy-focused design</li>
          </ul>
          <div className="mt-10">
            <div className="rounded-xl bg-pink-50 border border-pink-200 text-pink-700 px-6 py-4 shadow text-center">
              <strong>Disclaimer:</strong> This AI tool is not a medical device.
              It is for educational and awareness purposes only. Always consult
              a qualified healthcare professional for diagnosis and treatment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
