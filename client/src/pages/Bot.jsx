import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bot = () => {
  const [conversations, setConversations] = useState([]);
  const [nextToken, setNextToken] = useState(null);
  const [prompt, setPrompt] = useState('');
  const accessToken = 'bp_pat_ykIadqXicffqMyW72EeJp4uwjB68MElF9ClI'; // Replace with your access token

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send prompt to Botpress API via proxy server
      const response = await axios.post('http://localhost:5000/apix/v1/chat/conversations', {
        text: prompt
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });

      // Update state with new conversation
      setConversations(prevConversations => [...prevConversations, response.data]);
    } catch (error) {
      console.error('Error sending prompt:', error);
    }
    // Clear prompt input after submission
    setPrompt('');
  };

  useEffect(() => {
    // Function to fetch conversations
    const fetchConversations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/apix/v1/chat/conversations', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          params: {
            nextToken: nextToken // Include nextToken if available
          }
        });

        // Update state with conversations
        setConversations(prevConversations => [...prevConversations, ...response.data.conversations]);
        setNextToken(response.data.meta.nextToken); // Update nextToken
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    // Fetch conversations when component mounts
    fetchConversations();

    // Cleanup function
    return () => {
      // Perform cleanup if needed
    };
  }, [nextToken]); // Fetch conversations when nextToken changes

  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map(conversation => (
          <li key={conversation.id}>
            {/* Render conversation details */}
            {conversation.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={prompt} onChange={handlePromptChange} />
        <button type="submit">Send Prompt</button>
      </form>
    </div>
  );
};

export default Bot;
