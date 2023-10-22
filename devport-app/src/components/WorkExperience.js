import React, { useState } from 'react';
import axios from 'axios';

const Work = ({ userId, onSave }) => {
    const [isHidden, setIsHidden] = useState(true);
    const [formData, setFormData] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        achievements: [], // Store achievements as an array
        responsibilities: '',
        userId: userId,
    });
    const [isAdding, setIsAdding] = useState(false);

    const toggleDetails = () => {
        setIsHidden(!isHidden);
    };

    const saveWorkDetails = async (data) => {
        try {
            // const access_token = localStorage.getItem('access_token');
            const access_token = 'Bearer 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';
            if (!access_token) {
                console.error('Access token not found in localStorage');
                return;
            }

            data.userId = userId;
            const response = await axios.post(`http://165.227.108.97/experience/${userId}`, data, {});
            
            if (response.status === 200) {
                console.log('Work details saved successfully');
            }
            onSave('Projects');
        } catch (error) {
            console.error('Error saving work details', error);
        }
    };

    const handleSaveWorkDetails = async (event) => {
        event.preventDefault();
        saveWorkDetails(formData);
        setIsHidden(true);
        setIsAdding(false);
    };

    const handleChange = (event) => {
        console.log('Event target:', event.target);
        const { name, value } = event.target;
    
        if (name === 'achievements' && event.target.tagName === 'TEXTAREA') {
            // Handle achievements as a list by splitting the value into an array
            const achievements = value.split('\n').map(item => item.trim());
            setFormData({
                ...formData,
                [name]: achievements,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };    

    const addAnotherForm = () => {
        setIsAdding(true);
    };

    const cancelAddForm = () => {
        setIsAdding(false);
    };

    return (
        <main>
            <section id="workexperience-details">
                <div className="content-container">
                    <div className="content">
                        <form id="workexperience-form" onSubmit={handleSaveWorkDetails}>
                            <div className="label-input-pair">
                                <label htmlFor="company" className="label">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="nav-content"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="label-input-pair">
                                <label htmlFor="position" className="label">Position</label>
                                <input
                                    type="text"
                                    id="position"
                                    className="nav-content"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="dates">
                                <div className="label-input-pair">
                                    <label htmlFor="startDate" className="label">Start Date</label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        className="nav-content"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="label-input-pair">
                                    <label htmlFor="endDate" className="label">End Date</label>
                                    <input
                                        type="date"
                                        id="endDate"
                                        className="nav-content"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="label-input-pair">
                                <label htmlFor="achievements" className="label">Achievement</label>
                                <textarea
                                    className="nav-content"
                                    name="achievements"
                                    placeholder='- Enter your achievements in a list format...'
                                    value={formData.achievements.join('\n')}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="label-input-pair">
                                <label htmlFor="responsibilities" className="label">Responsibilities</label>
                                <textarea
                                    className="nav-content"
                                    name="responsibilities"
                                    placeholder='- Enter your responsibilities in a list format...'
                                    value={formData.responsibilities}
                                    onChange={handleChange}
                                />
                            </div>
                            <button id="save-button" type="submit" className='LSbutton' onClick={toggleDetails}>
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section id="workexperience-list" className="content-container">
                <section className="content-container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="content-container">
                        <div className="content-container">
                            {isAdding && (
                                <div className="label-input-pair">
                                    {/* Display the form for adding new work experience details */}
                                    <form id="workexperience-form" onSubmit={handleSaveWorkDetails}>
                                        <div className="label-input-pair">
                                            <label className="label">Company</label>
                                            <input
                                                type="text"
                                                className="nav-content"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="label-input-pair">
                                            <label className="label">Position</label>
                                            <input
                                                type="text"
                                                className="nav-content"
                                                name="position"
                                                value={formData.position}
                                                onChange={handleChange}
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
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="label-input-pair">
                                                <label className="label">End Date</label>
                                                <input
                                                    type="date"
                                                    className="nav-content"
                                                    name="endDate"
                                                    value={formData.endDate}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="label-input-pair">
                                            <label className="label">Achievement</label>
                                            <textarea
                                                className="nav-content"
                                                name="achievements"
                                                placeholder='- Enter your achievements in a list format...'
                                                value={formData.achievements.join('\n')}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="label-input-pair">
                                            <label className="label">Responsibilities</label>
                                            <textarea
                                                className="nav-content"
                                                name="responsibilities"
                                                placeholder='- Enter your responsibilities in a list format...'
                                                value={formData.achievements.join('\n')}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="add-form-buttons">
                                            <button type="submit" className='LSbutton' style={{ display: 'block', margin: '0 auto' }}>
                                                Save
                                            </button>
                                            <button type="button" className='LSbutton' onClick={cancelAddForm} style={{ display: 'block', margin: '10px auto' }}>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                {!isAdding && (
                    <button type="button" id='add-button' className='LSbutton' onClick={addAnotherForm}>
                        +
                    </button>
                )}
            </section>
        </main>
    );
};

export default Work;
