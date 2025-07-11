import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTeamTasks } from '../../actions/taskActions';

const TaskManager = ({ team }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('TaskManager team prop:', team);
    if (team && typeof team._id === 'string' && team._id.length > 0) {
      dispatch(getTeamTasks(team._id));
    } else {
      console.warn('No valid team._id provided to TaskManager:', team);
    }
  }, [dispatch, team]);

  return (
    <div>TaskManager component</div>
  );
};

export default TaskManager; 