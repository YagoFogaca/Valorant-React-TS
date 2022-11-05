import { AgentsCards } from '../../utils/types/types';
import Card from 'react-bootstrap/Card';

export function CardInfo({
  displayIcon,
  displayName,
  description,
  backgroundGradientColors,
}: AgentsCards) {
  return (
    <>
      <Card
        style={{
          width: '20%',
          maxWidth: '300px',
          minWidth: '240px',
          backgroundColor: `#${backgroundGradientColors[3]}`,
          borderRadius: '1rem',
          overflow: 'auto',
          cursor: 'pointer',
        }}
      >
        <Card.Img
          variant="top"
          src={displayIcon}
          style={{ boxShadow: 'inset 0px 0px 20px 5px #000' }}
        />
        <Card.Body
          style={{
            backgroundColor: `#${backgroundGradientColors[2]}`,
          }}
        >
          <Card.Title
            style={{
              color: `#${backgroundGradientColors[0]}`,
            }}
            className="card-title-agents"
          >
            {displayName}
          </Card.Title>
          <Card.Text
            style={{
              color: `#${backgroundGradientColors[0]}`,
            }}
            className="card-text-agents"
          >
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
