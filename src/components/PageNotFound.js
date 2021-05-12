import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
    This page does not exist; 404 - <Link to='/'>Go home</Link>
    </div>
);

export default PageNotFound;