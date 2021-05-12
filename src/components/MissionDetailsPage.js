import React from 'react';

const MissionDetailsPage = (props) => (
    <div>
    This is the page with details for Mission ID: {props.match.params.id}.
    </div>
);

export default MissionDetailsPage;