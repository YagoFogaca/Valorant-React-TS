import { useState, useEffect } from 'react';
import { AgentsCards } from '../utils/types/types';
import { Api } from '../utils/api/api';
import { SectionAgents } from './style.agents';
import { CardInfo } from '../components/card-info/card-info';

export function Agents() {
  const [agents, setAgents] = useState<AgentsCards[]>([]);

  async function getAgents() {
    const results = await Api.getAllAgents();
    setAgents(results.data);
  }

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <SectionAgents>
      {agents.map((agent, index) => {
        if (agent.isPlayableCharacter === true) {
          return (
            <CardInfo
              key={index}
              backgroundGradientColors={agent.backgroundGradientColors}
              isPlayableCharacter={agent.isPlayableCharacter}
              displayName={agent.displayName}
              displayIcon={agent.displayIcon}
              description={agent.description}
            />
          );
        }
      })}
    </SectionAgents>
  );
}
