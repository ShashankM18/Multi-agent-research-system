import AgentCard from "./AgentCard";

export default function PipelineStatus() {
  return (
    <div className="grid md:grid-cols-4 gap-4 mt-10">
      <AgentCard title="Search Agent" icon="🔍" />
      <AgentCard title="Reader Agent" icon="📄" />
      <AgentCard title="Writer Agent" icon="✍️" />
      <AgentCard title="Critic Agent" icon="🧐" />
    </div>
  );
}