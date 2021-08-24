import React, { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { Link, useParams } from 'react-router-dom';
import './Read.css'
import { Button } from 'react-bootstrap';

const Read = () => {
    const [users, setUsers] = useContext(UserContext);
    const {id} = useParams();

    const user = users.filter((user) => user.id ==id);
    return (
        <div className="Read">
            <h1>ID: {user[0].id}</h1>
            <h1>Name: {user[0].name}</h1>
            <h1>position: {user[0].position}</h1>
            <h1>Salary: {user[0].salary} /=</h1>
            <Link to="/">
                <Button variant="info">
                    Back to Home
                </Button>
            </Link>
            
        </div>
    );
};

export default Read;