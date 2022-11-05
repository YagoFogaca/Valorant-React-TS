import styled from 'styled-components';

export const SectionAgents = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  gap: 2.5rem;
  margin: 2.5rem 0rem;

  .card-title-agents {
    font-size: 2.5rem;
  }

  .card-text-agents {
    font-size: 2rem;
    font-weight: 200;
  }

  @media (max-width: 450px) {
    .card-title-agents {
      font-size: 2rem;
    }

    .card-text-agents {
      font-size: 1.6rem;
    }
  }
`;
