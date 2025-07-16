// If using App Router: app/consulting/page.tsx
export default function ConsultingPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Consulting</h1>
          <div className="space-y-4 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold">Laura Michelle Cotto</h2>
            </div>
            <div>
              <p>6926 Kimberly Heights Ln.</p>
              <p>Jacksonville, FL 32222-1761</p>
            </div>
            <div>
              <p>(206) 249-9023</p>
              <p>laura87michelle@gmail.com</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Professional Profile</h3>
              <p className="mt-2 text-gray-600">
                Experienced consultant specializing in personalized client solutions, strategic insights, and efficient project delivery. Committed to providing exceptional service and fostering long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  