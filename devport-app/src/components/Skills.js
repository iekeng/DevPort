import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputField from './InputField';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Skills = ({ onSave }) => {
  const [skills, setSkills] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const accessToken = localStorage.getItem('accessToken');

  // useEffect(() => {
  //   if (accessToken) {
  //     fetchSkillsFromGitHubRepos();
  //   }
  // }, []);

  // const fetchSkillsFromGitHubRepos = async () => {
  //   try {
  //     const userReposUrl = 'https://api.github.com/user/repos';
  //     const userReposResponse = await axios.get(userReposUrl, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });

  //     if (userReposResponse.status === 200) {
  //       const userRepos = userReposResponse.data;
  //       const uniqueLanguages = new Set();
  //       const fetchPromises = [];

  //       for (const repo of userRepos) {
  //         const languagesUrl = repo.languages_url;
  //         fetchPromises.push(
  //           axios.get(languagesUrl, {
  //             headers: {
  //               Authorization: `Bearer ${accessToken}`,
  //             },
  //           })
  //         );
  //       }

  //       // Fetch languages for all repositories in parallel
  //       const repoLanguagesResponses = await Promise.all(fetchPromises);

  //       for (const response of repoLanguagesResponses) {
  //         if (response.status === 200) {
  //           const repoLanguages = Object.keys(response.data);
  //           repoLanguages.forEach((language) => uniqueLanguages.add(language));
  //         }
  //       }

  //       setSkills(Array.from(uniqueLanguages));
  //     }
  //   } catch (error) {
  //     console.error('Error fetching skills from GitHub repositories', error);
  //   }
  // };

  // const saveLanguagesToDB = async () => {
  //   try {
  //     const userId = localStorage.getItem('userId');
  //     const response = await axios.post(`http:localhost:4000/skill/${userId}`, {
  //       skills: skills,
  //     });
  //     if (response.status === 201) {
  //       console.log('Skills saved to DB');
  //       onSave('WorkExperience');
  //     }
  //   } catch (error) {
  //     console.error('Error saving skills to DB', error);
  //   }
  // };

  // const handleEditClick = () => {
  //   setIsEditing(true);
  // };

  // const handleSaveClick = () => {
  //   setIsEditing(false);
  //   saveLanguagesToDB();
  // };

  return (
    // <div>
    // <main style={{marginTop: '450px'}}>
    //   <section id="skills-details" style={{ display: 'block', margin: '0 auto' }}>
    //     <div>
    //       {isEditing ? (
    //         <ul className="skills-list-edit">
    //           {skills.map((skill, index) => (
    //             <li key={index} className="nav-content" style={{ width: '100px' }}>
    //               <input
    //                 type="text"
    //                 style={{ width: '80px', background: 'blue', border: '0', color: 'white', textAlign: 'center' }}
    //                 value={skill}
    //                 onChange={(e) => {
    //                   const updatedSkills = [...skills];
    //                   updatedSkills[index] = e.target.value;
    //                   setSkills(updatedSkills);
    //                 }}
    //               />
    //             </li>
    //           ))}
    //         </ul>
    //       ) : (
    //         <ul className="skills-list-view">
    //           {skills.map((skill, index) => (
    //             <li key={index} className="nav-content" style={{ width: '100px' }}>
    //               {skill}
    //             </li>
    //           ))}
    //         </ul>
    //       )}
    //     </div>
    //   </section>
    //   {isEditing ? (
    //     <button type="submit" className="LSbutton" onClick={handleSaveClick} style={{ display: 'block', margin: 'auto' }}>
    //       Save
    //     </button>
    //   ) : (
    //     <button type="button" className="LSbutton" onClick={handleEditClick} style={{ display: 'block', margin: 'auto' }}>
    //       Edit
    //     </button>
    //   )}
    // </main>
    // </div>
    <>
      <h3>Skills</h3>
      <Row>
        <Col>
          <InputField name="skills" label="Skill" type="text" placeholder=". . ." />
        </Col>
        <Col>
          <InputField name="skills" label="Skill" type="text" placeholder=". . ." />
        </Col>
      </Row>
    </>
  );
};

export default Skills;
