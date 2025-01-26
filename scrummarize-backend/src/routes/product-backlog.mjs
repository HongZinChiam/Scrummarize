import { Router } from 'express';
import {
  getPBTasks,
  addPBTask,
  getPBTask,
  modifyPBTask,
  deletePBTask,
  movePBTasks,
  getPBTaskNames,
} from '../database/productBacklogDB.mjs';
import {
  addTaskTags,
  getTaskTags,
  deleteTaskTag,
} from '../database/indexDB.mjs';
import { getSprintNames } from '../database/sprintBoardDB.mjs';
import { getTasksWithTags } from '../utils.mjs';

const router = Router();

router
  .route('/')

  .get(async (request, response) => {
    const tasks = await getPBTasks();
    const tasksWithTags = await getTasksWithTags(tasks);

    response.send(tasksWithTags);
  })

  .post(async (request, response) => {
    const { tags, ...taskInfo } = request.body;

    const newTask = await addPBTask(taskInfo);
    const addedTags = await addTaskTags(newTask.taskID, tags);

    response.send({
      ...newTask,
      tags: addedTags,
    });
  });

router
  .route('/task/:taskID')

  .get(async (request, response) => {
    const taskID = request.params.taskID;

    const task = await getPBTask(taskID);
    const tags = await getTaskTags(taskID);

    response.send({
      ...task,
      tags,
    });
  })

  .put(async (request, response) => {
    const taskID = request.params.taskID;
    const { tags, ...taskInfo } = request.body;

    const modifiedTask = await modifyPBTask(taskID, taskInfo);
    await deleteTaskTag(taskID);
    const newTags = await addTaskTags(taskID, tags);

    response.send({
      ...modifiedTask,
      tags: newTags,
    });
  })

  .delete(async (request, response) => {
    const taskID = request.params.taskID;

    await deletePBTask(taskID);

    response.send();
  });

router
  .route('/move')

  .get(async (request, response) => {
    const taskNames = await getPBTaskNames();
    const sprintNames = await getSprintNames();

    const data = { taskNames, sprintNames };

    response.send(data);
  })

  .patch(async (request, response) => {
    const { sprintID, taskIDs } = request.body;

    await movePBTasks(sprintID, taskIDs);

    response.send();
  });

export default router;
