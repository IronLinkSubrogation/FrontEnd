import React, { useEffect, useState } from 'react';
import { getCaseActions } from '../api';
import ButtonTile from './ButtonTile';

const CaseActions = ({ caseId }) => {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const fetchActions = async () => {
      const res = await getCaseActions(caseId);
      if (Array.isArray(res)) {
        setActions(res);
      }
    };
    fetchActions();
  }, [caseId]);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Actions for Case #{caseId}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {actions.map((action, index) => (
          <ButtonTile
            key={index}
            label={action.label}
            onClick={() => window.location.href = action.href}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseActions;
