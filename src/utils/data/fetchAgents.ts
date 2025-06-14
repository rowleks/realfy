export interface Agent {
  id: number;
  name: string;
  image: string;
  role: string;
}

export async function fetchAllAgents(): Promise<Agent[]> {
  const response = await fetch("/agents.json");
  if (!response.ok) {
    throw new Error("Failed to fetch agents");
  }
  return response.json();
}

export async function fetchAgentById(id: number): Promise<Agent | undefined> {
  const agents = await fetchAllAgents();
  return agents.find((agent) => agent.id === id);
}
