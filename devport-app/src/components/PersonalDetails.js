import React, { useState } from 'react';
import axios from 'axios';

const PersonalDetails = ({ userId, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        socials: {
            twitter: '',
            linkedIn: '',
        },
        userId: userId,
    });

    const savePersonalDetails = async (data) => {
        try {
            const access_token = localStorage.getItem('access_token');
            if (!access_token) {
                console.error('Access token not found in localStorage');
                return;
            }

            data.userId = userId;
            const response = await axios.post('http://165.227.108.97/users', data, {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                },
            });

            if (response.status === 201) {
                console.log('Personal details saved successfully');

                // Assuming the backend sends back a unique userID upon successful signup
                const userId = response.data.userId;
                localStorage.setItem('userId', userId);
                console.log('User ID saved to localStorage');
            }
            onSave('Education');
        } catch (error) {
            console.error('Error saving personal details', error);
        }
    };

    const handleSavePersonalDetails = (event) => {
        event.preventDefault();
        savePersonalDetails(formData);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handling socials separately
    const handleSocialsChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
        ...prevData,
        socials: {
            ...prevData.socials,
            [name]: value,
        },
    }));
};

    return (
        <main>
            <form id="personal-details-form" onSubmit={handleSavePersonalDetails}>
                <div className="label-input-pair">
                    <label htmlFor="name-input" className="label">Name</label>
                    <input type="text" id="name-input" className="nav-content" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="label-input-pair">
                    <label htmlFor="email-input" className="label">Email Address</label>
                    <input type="text" id="email-input" className="nav-content" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="label-input-pair">
                    <label htmlFor="twitter-input" className="label">Twitter</label>
                    <input type="text" id="twitter-input" className="nav-content" name="twitter" value={formData.socials.twitter} onChange={handleSocialsChange} />
                </div>
                <div className="label-input-pair">
                    <label htmlFor="linkedin-input" className="label">LinkedIn</label>
                    <input type="text" id="linkedin-input" className="nav-content" name="linkedIn" value={formData.socials.linkedIn} onChange={handleSocialsChange} />
                </div>
                <div className="label-input-pair">
                    <label htmlFor="phone-input" className="label">Phone</label>
                    <input type="text" id="phone-input" className="nav-content" name="phone" value={formData.phone} onChange={handleInputChange} />
                </div>
                <button type="submit" className='LSbutton'>Save</button>
            </form>
        </main>
    );
};

export default PersonalDetails;
