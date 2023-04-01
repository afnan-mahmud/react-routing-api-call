import React, { useEffect, useState } from 'react';
import UserDetail from '../Home/UserDetail';

const User = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [data , setData] = useState([]);
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div style={{marginTop:'20px'}}>
                <h1><b>Our popular client information</b></h1>
                <div className='grid'>
                    {
                        data.map(user => <UserDetail user={user}></UserDetail>)
                    }
                </div>
        </div>
    );
};

export default User;