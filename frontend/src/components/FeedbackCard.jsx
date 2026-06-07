export default function FeedbackCard({
  feedback,
}) {
  if (!feedback) return null;

  return (
    <div className="bg-gray-900 p-8 rounded-xl mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Critic Feedback
      </h2>

      <pre className="whitespace-pre-wrap">
        {feedback}
      </pre>
    </div>
  );
}