import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = ({ onSave }) => {
  const [skills, setSkills] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  // Get access token from localStorage
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (accessToken) {
      fetchSkillsFromGitHubRepos();
    }
  }, []);

  const fetchSkillsFromGitHubRepos = async () => {
    try {
      // Fetch the user's repositories
      const userReposUrl = 'https://api.github.com/user/repos';
      const userReposResponse = await axios.get(userReposUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (userReposResponse.status === 200) {
        const userRepos = userReposResponse.data;
        const uniqueLanguages = new Set();

        for (const repo of userRepos) {
          const languagesUrl = repo.languages_url;

          // Fetch the languages for each repository
          const repoLanguagesResponse = await axios.get(languagesUrl, {
            headers: {
              Authorization: accessToken,
            },
          });

          if (repoLanguagesResponse.status === 200) {
            const repoLanguages = Object.keys(repoLanguagesResponse.data);
            repoLanguages.forEach((language) => uniqueLanguages.add(language));
          }
        }

        setSkills(Array.from(uniqueLanguages)); // Convert the Set back to an array
      }
    } catch (error) {
      console.error('Error fetching skills from GitHub repositories', error);
    }
  };

  const saveLanguagesToDB = async () => {
    try {
      const userId = localStorage.getItem('user_id');
      const response = await axios.post(`http://165.227.108.97/skills/${userId}`, {
        skills: skills, // Pass the skills array to the server
      });
      if (response.status === 200) {
        console.log('Skills saved to DB');
        onSave('WorkExperience'); // Trigger the next step after saving
      }
    } catch (error) {
      console.error('Error saving skills to DB', error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false); // Save changes and exit edit mode
    saveLanguagesToDB(); // Call the function to save skills to the DB
  };

  return (
    <main>
  <section id="skills-details" style={{ display: 'block', margin: '0 auto' }}>
    <div>
      {isEditing ? (
        // Edit mode
        <ul className="skills-list-edit">
          {skills.map((skill, index) => (
            <li key={index} className="nav-content" style={{width: '100px'}}>
              <input
                type="text"
                style={{width: '80px', background: 'blue', border: '0', color: 'white', textAlign: 'center'}}
                value={skill}
                onChange={(e) => {
                  // Update the skill in the state when editing
                  const updatedSkills = [...skills];
                  updatedSkills[index] = e.target.value;
                  setSkills(updatedSkills);
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        // View mode
        <ul className="skills-list-view">
          {skills.map((skill, index) => (
            <li key={index} className="nav-content" style={{width: '100px'}}>
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  </section>
  {isEditing ? (
    <button type="submit" className="LSbutton" onClick={handleSaveClick}  style={{ display: 'block', margin: 'auto' }}>
      Save
    </button>
  ) : (
    <button type="button" className="LSbutton" onClick={handleEditClick}  style={{ display: 'block', margin: 'auto' }}>
      Edit
    </button>
  )}
</main>

  );
};

export default Skills;
