import React, { useState } from 'react';
import axios from 'axios';

const PersonalDetails = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        linkedin: '',
        phone: '',
    });

    const savePersonalDetails = async (data) => {
        try {
            const access_token = localStorage.getItem('access_token');
            if (!access_token) {
                console.error('Access token not found in localStorage');
                return;
            }

            const response = await axios.post('URL to save personal details', data, {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                },
            });

            if (response.status === 200) {
                console.log('Personal details saved successfully');
            }
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

    return (
        <main>
            <h2>Edit Personal Details</h2>
            <form id="personal-details-form" onSubmit={handleSavePersonalDetails}>
                <label htmlFor="name-input">Name:</label>
                <input type="text" id="name-input" name="name" value={formData.name} onChange={handleInputChange} />
                <label htmlFor="email-input">Email Address:</label>
                <input type="text" id="email-input" name="email" value={formData.email} onChange={handleInputChange} />
                <label htmlFor="linkedin-input">LinkedIn:</label>
                <input type="text" id="linkedin-input" name="linkedin" value={formData.linkedin} onChange={handleInputChange} />
                <label htmlFor="phone-input">Phone:</label>
                <input type="text" id="phone-input" name="phone" value={formData.phone} onChange={handleInputChange} />
                <button type="submit">Save</button>
            </form>
        </main>
    );
};

export default PersonalDetails;
