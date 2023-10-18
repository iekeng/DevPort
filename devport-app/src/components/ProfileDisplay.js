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
                const response = await axios.get('/api/user/profile', {
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
                        style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
                    />
                    <h2 style={{ fontSize: '13px' }}>
                        {userProfile.firstname} {userProfile.lastname}
                    </h2>
                </>
            )}
            {loading && <h2 style={{ fontSize: '13px' }}>Loading...</h2>}
            {!userProfile && !loading && <h2 style={{ fontSize: '13px' }}>No user profile found</h2>}
        </div>
    );
};

export default ProfileDisplay;
