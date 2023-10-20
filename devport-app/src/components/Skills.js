import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [skills, setSkills] = useState([]); // Store skills as an array
  const [access_token] = useState(localStorage.getItem('access_token'));
  const [userId] = useState(localStorage.getItem('userId'));

  useEffect(() => {
    if (access_token) {
      fetchSkillsFromGitHubRepos();
    }
  }, [access_token]);

  const toggleDetails = () => {
    setIsHidden(!isHidden);
    setEditMode(false);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const fetchSkillsFromGitHubRepos = async () => {
    try {
      const githubReposUrl = `http://165.227.108.97/skill/${userId}/repos?per_page=100`;

      const response = await axios.get(githubReposUrl, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (response.status === 200) {
        // Extract skills from repositories
        const repoSkills = response.data
          .map((repo) => repo.language)
          .filter(Boolean);

        setSkills(repoSkills);
      }
    } catch (error) {
      console.error('Error fetching skills from GitHub repositories', error);
    }
  };

  const saveSkillsToDB = async () => {
    try {
      // Replace with the URL of your server's endpoint for saving skills to the database
      const saveSkillsUrl = 'http://165.227.108.97/api/saveSkills';

      const response = await axios.post(
        saveSkillsUrl,
        { skills }, // Send skills as an array
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Skills data saved to the database successfully');
        toggleEditMode();
      }
    } catch (error) {
      console.error('Error saving skills data to the database', error);
    }
  };

  return (
    <main>
      <section id='skills-details'>
        {isHidden ? (
          <div>
            <h2>Skills</h2>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <button type='button' className='LSbutton' onClick={toggleEditMode}>Edit</button>
          </div>
        ) : (
          <div id='edit-skills-details'>
            <h2>Edit Skills</h2>
            <form id='skills-form' onSubmit={(e) => e.preventDefault()}>
            <div className="label-input-pair">
              <label htmlFor='skills-input' className='label'>Skills (comma-separated):</label>
              <input
                type='text'
                id='skills-input'
                className='nav-content'
                value={skills.join(', ')}
                onChange={(e) => setSkills(e.target.value.split(', ').filter(Boolean))}
              />
            </div>
              <button type='submit' onClick={saveSkillsToDB}>Save</button>
              <button onClick={toggleEditMode} className='LSbutton'>Cancel</button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
};

export default Skills;
