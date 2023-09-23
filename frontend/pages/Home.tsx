import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [currentTopic, setCurrentTopic] = useState('Topic 1'); 
  const [nextSubtopic, setNextSubtopic] = useState('');

  useEffect(() => {
    const apiUrl = `http://localhost:9009/get_next_subtopic/${currentTopic}`;

    axios.get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          setNextSubtopic(response.data.next_subtopic);
        } else {
          console.error('Failed to fetch data');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [currentTopic]);

  return (
    <div>
      <h1>Current Topic: {currentTopic}</h1>
      {nextSubtopic && (
        <div>
          <h2>Next Subtopic:</h2>
          <p>{nextSubtopic}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
