// JobEditScreen.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editJob } from '../actions/jobActions';

const JobEditScreen = ({ match }) => {
  const jobId = match.params.id;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // Add other fields as needed

  const dispatch = useDispatch();

  const jobEdit = useSelector((state) => state.jobEdit);
  const { loading, success, error } = jobEdit;

  useEffect(() => {
    // Fetch job data for editing
    // You may dispatch an action to load job details here
  }, [dispatch, jobId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch edit job action
    dispatch(editJob(jobId, { title, description }));
  };

  return (
    <div>
      <h1>Edit Job</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {success && <p>Job updated successfully</p>}
      <form onSubmit={submitHandler}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        {/* Add other fields */}
        <button type="submit">Update Job</button>
      </form>
    </div>
  );
};

export default JobEditScreen;
