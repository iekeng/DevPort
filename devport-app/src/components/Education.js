import React, { useState } from 'react';
import axios from 'axios';

const Education = () => {
    const [formData, setFormData] = useState({
        institution: '',
        course: '',
        degree: '',
        location: '',
        startDate: '',
        endDate: '',
    });

    const [educationDetails, setEducationDetails] = useState([]); // To store multiple education details
    const [isAdding, setIsAdding] = useState(false);

    const saveEducationDetails = async (data) => {
        try {
            const access_token = localStorage.getItem('access_token');
            if (!access_token) {
                console.error('Access token not found in localStorage');
                return;
            }

            const response = await axios.post('URL to save education details', data, {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                },
            });

            if (response.status === 200) {
                console.log('Education details saved successfully');
            }
        } catch (error) {
            console.error('Error saving education details', error);
        }
    };

    const handleSaveEducationDetails = async (event) => {
        event.preventDefault();
        saveEducationDetails(formData);
        setEducationDetails([...educationDetails, formData]); // Save the current education details
        setFormData({
            institution: '',
            course: '',
            degree: '',
            location: '',
            startDate: '',
            endDate: '',
        });
        setIsAdding(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const addAnotherForm = () => {
        setIsAdding(true);
    };

    const cancelAddForm = () => {
        setIsAdding(false);
    };

    return (
        <main>
            <form id="education-form" onSubmit={handleSaveEducationDetails}>
                <section id="education-details">
                    <div className="content-container">
                        <div className="content">
                            <div className="label-input-pair">
                                <label htmlFor="institution-input" className="label">Institution</label>
                                <input type="text" id="institution-input" className="nav-content"  name="institution" value={formData.institution} onChange={handleInputChange} />
                            </div>
                            <div className="label-input-pair">
                                <label htmlFor="course-input" className="label">Course</label>
                                <input type="text" id="course-input" className="nav-content" name="course" value={formData.course} onChange={handleInputChange} />
                            </div>
                            <div className="label-input-pair">
                                <label htmlFor="degree-input" className="label">Degree</label>
                                <input type="text" id="degree-input" className="nav-content" name="degree" value={formData.degree} onChange={handleInputChange} />
                            </div>
                            <div className="label-input-pair">
                                <label htmlFor="location-input" className="label">Location</label>
                                <input type="text" id="location-input" className="nav-content" name="location" value={formData.location} onChange={handleInputChange} />
                            </div>
                            <div className="dates">
                                <div className="label-input-pair">
                                    <label htmlFor="startDate-input" className="label">Start Date</label>
                                    <input type="date" id="startDate-input" className="nav-content" name="startDate" value={formData.startDate} onChange={handleInputChange} />
                                </div>
                                <div className="label-input-pair">
                                    <label htmlFor="endDate-input" className="label">End Date</label>
                                    <input type="date" id="endDate-input" className="nav-content" name="endDate" value={formData.endDate} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <button type="submit" className='LSbutton'>Save</button>
            
            <section id="education-list" className="content-container">
                <section>
                <div className="content-container">
                    <div className="content">
            {isAdding && (
                        <div className="content-container">
                            {/* Display the form for adding new education details */}
                            <div className="content">
                                <div className="label-input-pair">
                                    <label className="label">Institution</label>
                                    <input
                                        type="text"
                                        className="nav-content"
                                        name="institution"
                                        value={formData.institution}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="label-input-pair">
                                    <label className="label">Course</label>
                                    <input
                                        type="text"
                                        className="nav-content"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="label-input-pair">
                                    <label className="label">Degree</label>
                                    <input
                                        type="text"
                                        className="nav-content"
                                        name="degree"
                                        value={formData.degree}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="label-input-pair">
                                    <label className="label">Location</label>
                                    <input
                                        type="text"
                                        className="nav-content"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="dates">
                                    <div className="label-input-pair">
                                        <label className="label">Start Date</label>
                                        <input
                                            type="date"
                                            className="nav-content"
                                            name="startDate"
                                            value={formData.startDate}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="label-input-pair">
                                        <label className="label">End Date</label>
                                        <input
                                            type="date"
                                            className="nav-content"
                                            name="endDate"
                                            value={formData.endDate}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="add-form-buttons">
                                <button type="submit" className='LSbutton' style={{ display: 'block', margin: '5px auto' }}>Save</button>
                                <button type="button" className='LSbutton' onClick={cancelAddForm} style={{ display: 'block', margin: '0 auto'}}>Cancel</button>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
                </section>
                {!isAdding && (
                    <button type="button" id='add-button' className='LSbutton' onClick={addAnotherForm}>+</button>
                )}
            </section>
            </form>
        </main>
    );
};

export default Education;