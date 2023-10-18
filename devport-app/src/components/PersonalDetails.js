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
            <form id="personal-details-form" onSubmit={handleSavePersonalDetails}>
                <label htmlFor="name-input" className="label">Name</label>
                <input type="text" id="name-input" className="nav-content" name="name" value={formData.name} onChange={handleInputChange} />
                <label htmlFor="email-input" className="label">Email Address</label>
                <input type="text" id="email-input" className="nav-content" name="email" value={formData.email} onChange={handleInputChange} />
                <label htmlFor="linkedin-input" className="label">LinkedIn</label>
                <input type="text" id="linkedin-input" className="nav-content" name="linkedin" value={formData.linkedin} onChange={handleInputChange} />
                <label htmlFor="phone-input" className="label">Phone</label>
                <input type="text" id="phone-input" className="nav-content" name="phone" value={formData.phone} onChange={handleInputChange} />
                <button type="submit" className='LSbutton'>Save</button>
            </form>
        </main>
    );
};

export default PersonalDetails;
