import React from 'react';
import Office from './office';

import './officeGrid.css';

const OfficeGrid = (props) => {
  const { offices, _key: key } = props;

  return (
    <section key={key} className="office-group">
      {offices.map((office) => {
        return <Office key={key} {...office} />;
      })}
    </section>
  );
};

export default OfficeGrid;
