// import ReactMarkdown from "react-markdown";

export default function ReportViewer({
  report,
}) {
  if (!report) return null;

  return (
    <div className="bg-gray-900 p-8 rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Research Report
      </h2>

      <div className="prose prose-invert max-w-none">
        <div className="whitespace-pre-wrap">
        {report}
        </div>
      </div>
    </div>
  );
}