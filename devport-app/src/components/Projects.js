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

            const response = await axios.get('http://165.227.108.97/api.github.com/user/repos', {
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
                        <p className="label-input-pair"><span className="label">Project Name</span><br /><span className="nav-content" id="institution">{projectDetails.projectName}</span></p>
                        <p className="label-input-pair"><span className="label">Repository</span><br /><span className="nav-content" id="course"><a href={projectDetails.repository} target="_blank" rel="noopener noreferrer">{projectDetails.repository}</a></span></p>
                        <p className="label-input-pair"><span className="label">Live URL</span><br /><span className="nav-content" id="location"><a href={projectDetails.liveURL} target="_blank" rel="noopener noreferrer">{projectDetails.liveURL}</a></span></p>
                        <p className="label-input-pair"><span className="label">Description</span><br /><span className="nav-content" id="location">{projectDetails.description}</span></p>
                    </div>
                </div>
                <button id="edit-button" type='button' className='LSbutton' onClick={toggleEditMode}>Edit</button>
            </section>

            {editMode && (
                <div id="edit-project-details">
                    {/* Form to edit project details */}
                    <h2>Edit Project</h2>
                    <form id="project-form">
                    <div className="label-input-pair">
                        <label htmlFor="projectName-input" className="label">Project Name</label>
                        <input type="text" id="projectName-input" className="nav-content" name="projectName" value={projectDetails.projectName} onChange={(e) => setProjectDetails({ ...projectDetails, projectName: e.target.value })} />
                    </div>
                    <div className="label-input-pair">
                        <label htmlFor="repository-input" className="label">Repository</label>
                        <input type="text" id="repository-input" className="nav-content" name="repository" value={projectDetails.repository} onChange={(e) => setProjectDetails({ ...projectDetails, repository: e.target.value })} />
                    </div>
                    <div className="label-input-pair">
                        <label htmlFor="liveURL-input" className="label">Live URL</label>
                        <input type="text" id="liveURL-input" className="nav-content" name="liveURL" value={projectDetails.liveURL} onChange={(e) => setProjectDetails({ ...projectDetails, liveURL: e.target.value })} />
                    </div>
                    <div className="label-input-pair">
                        <label htmlFor="description-input" className="label">Description</label>
                        <input type="text" id="description-input" className="nav-content" name="description" value={projectDetails.description} onChange={(e) => setProjectDetails({ ...projectDetails, description: e.target.value })} />
                    </div>
                        {/* Add input fields for other project details */}
                        <button type="submit" className='LSbutton'>Save</button>
                    </form>
                    <button onClick={toggleEditMode} style={{ display: 'block', margin: '0 auto' }} id='add-button'>Cancel</button>
                </div>
            )}
        </main>
    );
}

export default Projects;
