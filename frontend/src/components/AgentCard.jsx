export default function AgentCard({
  title,
  icon,
  active,
}) {
  return (
    <div
      className={`rounded-xl p-5 border ${
        active
          ? "border-orange-500 bg-orange-500/10"
          : "border-gray-700 bg-gray-900"
      }`}
    >
      <div className="text-3xl mb-3">
        {icon}
      </div>

      <h3 className="font-semibold text-white">
        {title}
      </h3>
    </div>
  );
}

// export default function AgentCard({ title, icon }) {
//   return (
//     <div className="border border-gray-700 p-4 rounded-lg">
//       <div>{icon}</div>
//       <h3>{title}</h3>
//     </div>
//   );
// }