import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileDisplay = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const access_token = localStorage.getItem('access_token');
            if (access_token) {
                const response = await axios.get('http://http://165.227.108.97/api/user/profile', {
                    headers: {
                        'Authorization': `Bearer ${access_token}`,
                    },
                });

                if (response.status === 200) {
                    const { firstname, lastname, avatar_url } = response.data;
                    setUserProfile({ firstname, lastname, avatar_url });
                }
            }

            setLoading(false);
        } catch (error) {
            console.error('Error fetching user profile:', error);
            setLoading(false);
        }
    };

    return (
        <div style={{ paddingBottom: '0px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {userProfile && (
                <>
                    <img
                        src={userProfile.avatar_url}
                        alt="User Avatar"
                        id='profilepic'
                        style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
                    />
                    <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'white' }} id='profilename'>
                        {userProfile.firstname} {userProfile.lastname}
                    </p>
                </>
            )}
            {loading && <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'white' }}>Loading...</p>}
            {!userProfile && !loading && <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'white' }}>No profile found</p>}
        </div>
    );
};

export default ProfileDisplay;
