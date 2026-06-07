import { useState } from "react";

export default function SearchBox({
  onSearch,
  loading,
}) {
  const [topic, setTopic] = useState("");

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter research topic..."
          value={topic}
          onChange={(e) =>
            setTopic(e.target.value)
          }
          className="flex-1 p-4 rounded-xl
          bg-gray-900 border border-gray-700
          text-white"
        />

        <button
          onClick={() => onSearch(topic)}
          disabled={loading}
          className="bg-orange-500 px-6 rounded-xl
          text-black font-semibold"
        >
          {loading ? "Researching..." : "Research"}
        </button>
      </div>
    </div>
  );
}