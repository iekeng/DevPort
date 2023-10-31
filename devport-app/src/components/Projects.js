import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = ({ userId }) => {
    const [projectDetails, setProjectDetails] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [liveUrl, setLiveUrl] = useState('');
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        fetchUserProjectDetails();
    }, []);

    const fetchUserProjectDetails = async () => {
        // Get access token from localStorage
        const accessToken = localStorage.getItem('accessToken');
        try {

            const userReposUrl = 'https://api.github.com/user/repos';
            const userReposResponse = await axios.get(userReposUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (userReposResponse.status === 200) {
                const userProjects = userReposResponse.data;

                // Filter projects with GitHub Pages
                const projectsWithPages = userProjects.filter(project => project.has_pages);
                setProjectDetails(projectsWithPages);

                if (projectsWithPages.length > 0) {
                    // Select the first project by default
                    handleProjectSelect(projectsWithPages[0]);

                    // Set the Live URL using the desired format
                    setLiveUrl(`https://${userProjects[0].owner.login}.github.io/${projectsWithPages[0].name}`);
                }
            }
        } catch (error) {
            console.error('Error fetching project details', error);
        }
    };

    const handleProjectSelect = (project) => {
        setSelectedProject(project);

        // Update the Live URL when a project is selected
        setLiveUrl(`https://${project.owner.login}.github.io/${project.name}`);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const saveProjectDetails = async () => {
        try {
          const response = await axios.post(`https://165.227.108.97/project/${userId}`, {
            projectName: selectedProject.name,
            repository: selectedProject.html_url,
            liveURL: liveUrl,
            description: selectedProject.description
          });
            if (response.status === 201) {
                console.log('Project details saved successfully');
                console.log('Project details saved:', selectedProject);
                toggleEditMode();
            } else {
                console.log('Failed to save project details');
            }

        } catch (error) {
            console.error('Error saving project details', error);
        }
        console.log('Project details saved:', selectedProject);
        toggleEditMode();
    };

    return (
        <main>
            <section id="project-details" className='center-content'>
                <div className='center-content'>
                    <div className="content">
                        <div>
                            {editMode ? (
                                // Render edit form when in edit mode
                                <form style={{marginTop: '20px'}}>
                                    <div className="label-input-pair">
                                        <label htmlFor="projectName-input" className="label">Project Name</label>
                                        <input type="text" id="projectName-input" className="nav-content" name="projectName" value={selectedProject.name} />
                                    </div>
                                    <div className="label-input-pair">
                                        <label htmlFor="projectName-input" className="label">Repository</label>
                                        <input type="text" id="repository" className="nav-content" name="repository" value={selectedProject.html_url} />
                                    </div>
                                    <div className='label-input-pair'>
                                        <label htmlFor='liveURL-input' className="label">Live URL</label>
                                        <input type='text' id='liveURL-input' className="nav-content" name='liveURL' value={liveUrl} />
                                    </div>
                                    <div className='label-input-pair'>
                                        <label htmlFor='description-input' className="label">Description</label>
                                        <textarea id='description-input' className="nav-content" name='description' value={selectedProject.description} />
                                    </div>

                                    <button type="submit" className='LSbutton' onClick={saveProjectDetails} style={{margin: '10px'}}>Save</button>
                                    <button type='submit' className='LSbutton' onClick={toggleEditMode}>Cancel</button>
                                </form>
                            ) : (
                                // Display project details when not in edit mode
                                <div>
                                    <ul style={{ listStyle: 'none', fontSize: '15px', padding: 0 }}>
                                        {projectDetails.map((project, index) => (
                                            <li key={index} style={{ marginBottom: 0 }}>
                                                <button onClick={() => handleProjectSelect(project)}>{project.name}</button>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {selectedProject && !editMode && (
                    <div className="center-content">
                        <div className="content">
                            <p className="label-input-pair"><span className="label">Project Name</span><br /><span className="nav-content" id="projectName">{selectedProject.name}</span></p>
                            <p className="label-input-pair"><span className="label">Repository</span><br /><span className="nav-content" id="repository"><a href={selectedProject.html_url} target="_blank" rel="noopener noreferrer">{selectedProject.html_url}</a></span></p>
                            <p className="label-input-pair"><span className="label">Live URL</span><br /><span className="nav-content" id="liveURL"><a href={liveUrl} target="_blank" rel="noopener noreferrer">{liveUrl}</a></span></p>
                            <p className="label-input-pair"><span className="label">Description</span><br /><span className="nav-content" id="description">{selectedProject.description}</span></p>
                        </div>
                        <button type='submit' className='LSbutton' onClick={toggleEditMode}>Edit</button>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Projects;
