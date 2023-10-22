import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [access_token] = useState(localStorage.getItem('access_token'));

  useEffect(() => {
    if (access_token) {
      fetchSkillsFromGitHubRepos();
    }
  }, [access_token]);

  const fetchSkillsFromGitHubRepos = async () => {
    // Get access token from localStorage
    const access_token = localStorage.getItem('access_token');
    try {
      // Fetch the user's repositories
      const userReposUrl = 'https://api.github.com/user/repos';
      const userReposResponse = await axios.get(userReposUrl, {
        headers: {
          Authorization: `Bearer ${access_token}`,
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
              Authorization: access_token,
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

  return (
    <main>
      <section id='skills-details' style={{ display: 'block', margin: '0 auto' }}>
        <div>
          <h2>Skills</h2>
          <ul style={{listStyle: 'none'}}>
            {skills.map((skill, index) => (
              <li key={index} className="nav-content">{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Skills;
