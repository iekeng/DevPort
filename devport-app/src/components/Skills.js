import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [skillsDetails, setSkillsDetails] = useState({
    skills: '',
  });

  const [access_token] = useState(localStorage.getItem('access_token'));

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
      const githubReposUrl = 'https://api.github.com/user/repos?per_page=100';

      const response = await axios.get(githubReposUrl, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (response.status === 200) {
        const repoSkills = response.data.map((repo) => repo.language).filter(Boolean);

        // Combine the skills into a single string, separated by commas
        const skills = repoSkills.join(', ');

        setSkillsDetails({ skills });
      }
    } catch (error) {
      console.error('Error fetching skills from GitHub repositories', error);
    }
  };

  const saveSkillsToDB = async (skillsData) => {
    try {
      // Replace with the URL of your server's endpoint for saving skills to the database
      const saveSkillsUrl = 'http://your-server-url/api/saveSkills';

      const response = await axios.post(
        saveSkillsUrl,
        { skills: skillsData },
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
            <p>{skillsDetails.skills}</p>
            <button onClick={toggleEditMode}>Edit</button>
          </div>
        ) : (
          <div id='edit-skills-details'>
            <h2>Edit Skills</h2>
            <form id='skills-form' onSubmit={(e) => e.preventDefault()}>
              <label htmlFor='skills-input'>Skills:</label>
              <input
                type='text'
                id='skills-input'
                name='skills'
                value={skillsDetails.skills}
                onChange={(e) => setSkillsDetails({ skills: e.target.value })}
              />
              <button onClick={() => saveSkillsToDB(skillsDetails.skills)}>Save</button>
              <button onClick={toggleEditMode}>Cancel</button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
};

export default Skills;