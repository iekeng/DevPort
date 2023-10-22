import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonalDetails = ({ userId, onSave }) => {
    const access_token = 'Bearer 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';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        socials: {
            twitter: '',
            linkedIn: '',
        },
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchPersonalDetailsFromGitHub();
    }, []);

    const fetchPersonalDetailsFromGitHub = async () => {
        try {
            // Fetch personal details from GitHub API
            const userUrl = 'https://api.github.com/user';

            const response = await axios.get(userUrl, {
                headers: {
                    Authorization: access_token,
                },
            });

            if (response.status === 200) {
                const userData = response.data;
                console.log(userData);
                
                setFormData({
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone,
                    socials: {
                        twitter: userData.twitter_username,
                        linkedIn: userData.blog,
                    },
                });
            }
        } catch (error) {
            console.error('Error fetching personal details from GitHub', error);
        }
    };

    const handleSavePersonalDetails = () => {
        const updatePersonalDetailsApiUrl = 'http://165.227.108.97/users';

        // Prepare the data to send to the API
        const updatedDetails = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            socials: formData.socials,
            userId: userId,
        };

        // Send a PUT or POST request to update the details
        axios
            .put(updatePersonalDetailsApiUrl, updatedDetails)
            .then((response) => {
                if (response.status === 200) {
                    console.log('Personal details updated successfully');
                    setIsEditing(false); // Turn off editing mode
                } else {
                    console.error('Failed to update personal details');
                }
            })
            .catch((error) =>{
                console.error('Error updating personal details', error);
            });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        handleSavePersonalDetails();
    };

    return (
        <main>
            <form id="personal-details-form">
                <div className="label-input-pair">
                    <label htmlFor="name-input" className="label">Name</label>
                    <input
                        type="text"
                        id="name-input"
                        className="nav-content"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={!isEditing}
                    />
                </div>
                <div className="label-input-pair">
                    <label htmlFor="email-input" className="label">Email Address</label>
                    <input
                        type="text"
                        id="email-input"
                        className="nav-content"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={!isEditing}
                    />
                </div>
                <div className="label-input-pair">
                    <label htmlFor="twitter-input" className="label">Twitter</label>
                    <input
                        type="text"
                        id="twitter-input"
                        className="nav-content"
                        name="twitter"
                        value={formData.socials.twitter}
                        onChange={(e) => setFormData({ ...formData, socials: { ...formData.socials, twitter: e.target.value } })}
                        disabled={!isEditing}
                    />
                </div>
                <div className="label-input-pair">
                    <label htmlFor="linkedin-input" className="label">LinkedIn</label>
                    <input
                        type="text"
                        id="linkedin-input"
                        className="nav-content"
                        name="linkedIn"
                        value={formData.socials.linkedIn}
                        onChange={(e) => setFormData({ ...formData, socials: { ...formData.socials, linkedIn: e.target.value } })}
                        disabled={!isEditing}
                    />
                </div>
                <div className="label-input-pair">
                    <label htmlFor="phone-input" className="label">Phone</label>
                    <input
                        type="text"
                        id="phone-input"
                        className="nav-content"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        disabled={!isEditing}
                    />
                </div>
                {isEditing ? (
                    <button type="button" className="LSbutton" onClick={handleSaveClick}>
                        Save
                    </button>
                ) : (
                    <button type="button" className="LSbutton" onClick={handleEditClick}>
                        Edit
                    </button>
                )}
            </form>
        </main>
    );
};

export default PersonalDetails;
