import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [projectDetails, setProjectDetails] = useState({
        projectName: '',
        repository: '',
        liveURL: '',
        description: '',
    });

    const toggleDetails = () => {
        setIsHidden(!isHidden);
        setEditMode(false);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    useEffect(() => {
        fetchUserProjectDetails();
    }, []);

    const fetchUserProjectDetails = async () => {
        try {
            const access_token = localStorage.getItem('access_token');
            if (!access_token) {
                console.error('Access token not found in localStorage');
                return;
            }

            const response = await axios.get('https://api.github.com/user/repos', {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                },
            });

            if (response.status === 200) {
                // Find the first project with "has_pages" set to true
                const projectData = response.data.find(project => project.has_pages);

                if (projectData) {
                    setProjectDetails({
                        projectName: projectData.name,
                        repository: projectData.html_url,
                        liveURL: projectData.homepage,
                        description: projectData.description,
                    });
                }
            }
        } catch (error) {
            console.error('Error fetching project details', error);
        }
    };

    return (
        <main>
            <section id="personal-details">
                <div className="content-container">
                    <div className="content">
                        <p><span className="label">Project Name</span><br /><span className="nav-content" id="institution">{projectDetails.projectName}</span></p>
                        <p><span className="label">Repository</span><br /><span className="nav-content" id="course"><a href={projectDetails.repository} target="_blank" rel="noopener noreferrer">{projectDetails.repository}</a></span></p>
                        <p><span className="label">Live URL</span><br /><span className="nav-content" id="location"><a href={projectDetails.liveURL} target="_blank" rel="noopener noreferrer">{projectDetails.liveURL}</a></span></p>
                        <p><span className="label">Description</span><br /><span className="nav-content" id="location">{projectDetails.description}</span></p>
                    </div>
                </div>
                <button id="edit-button" onClick={toggleEditMode}>Edit</button>
            </section>

            {editMode && (
                <div id="edit-project-details">
                    {/* Form to edit project details */}
                    <h2>Edit Project</h2>
                    <form id="project-form">
                        <label htmlFor="projectName-input">Project Name:</label>
                        <input type="text" id="projectName-input" name="projectName" value={projectDetails.projectName} onChange={(e) => setProjectDetails({ ...projectDetails, projectName: e.target.value })} />

                        <label htmlFor="repository-input">Repository:</label>
                        <input type="text" id="repository-input" name="repository" value={projectDetails.repository} onChange={(e) => setProjectDetails({ ...projectDetails, repository: e.target.value })} />

                        <label htmlFor="liveURL-input">Live URL:</label>
                        <input type="text" id="liveURL-input" name="liveURL" value={projectDetails.liveURL} onChange={(e) => setProjectDetails({ ...projectDetails, liveURL: e.target.value })} />

                        <label htmlFor="description-input">Description:</label>
                        <input type="text" id="description-input" name="description" value={projectDetails.description} onChange={(e) => setProjectDetails({ ...projectDetails, description: e.target.value })} />

                        {/* Add input fields for other project details */}
                        <button type="submit">Save</button>
                    </form>
                    <button onClick={toggleEditMode}>Cancel</button>
                </div>
            )}
        </main>
    );
}

export default Projects;
