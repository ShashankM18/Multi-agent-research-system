import { useState } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import PipelineStatus from "../components/PipelineStatus";
import ReportViewer from "../components/ReportViewer";
import FeedbackCard from "../components/FeedbackCard";

import { runResearch } from "../services/api";

export default function Home() {
  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const handleSearch = async (
    topic
  ) => {
    if (!topic) return;

    setLoading(true);

    try {
      const data =
        await runResearch(topic);

      setResult(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };


  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6">
        <Hero />

        <SearchBox
          onSearch={handleSearch}
          loading={loading}
        />

        <PipelineStatus />

        {result && (
          <>
            <ReportViewer
              report={result.report}
            />

            <FeedbackCard
              feedback={result.feedback}
            />
          </>
        )}
      </div>
    </div>
  );
    
}


// export default function Home() {
//   return (
//     <h1 style={{ color: "white" }}>
//       Home Working 🚀
//     </h1>
//   );
// }