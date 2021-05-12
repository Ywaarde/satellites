import React from 'react';
import { Link } from 'react-router-dom';

const MissionListItem = ({ id, mission_id, name_short, agencies, status }) => (
    <tr>
      <td>{mission_id}</td>
      <td>{name_short}</td>
      <td>{agencies}</td>
      <td>{status}</td>
      <td>
        <Link to={`/edit/${mission_id}`}>Edit Mission</Link>
      </td>
    </tr>
);

export default MissionListItem;