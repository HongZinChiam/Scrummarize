import pool from './database.mjs';
import { formatPBTask, formatSBTask } from '../utils.mjs';

export async function getPBTasks() {
  const result = await pool.query(
    `
      SELECT *
      FROM tasks
      WHERE 
        sprint_id IS NULL AND stage = 'Planning'
    `
  );

  return result.rows.map(formatPBTask);
}

export async function addPBTask(taskInfo) {
  const {
    name,
    description,
    storyPoint,
    priorityRating,
    assignee,
    status,
    stage,
  } = taskInfo;

  const result = await pool.query(
    `
      INSERT INTO tasks (
        name, 
        description, 
        story_point, 
        priority_rating, 
        assignee, 
        status, 
        stage, 
        sprint_id
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, NULL)
      RETURNING *
    `,
    [name, description, storyPoint, priorityRating, assignee, status, stage]
  );

  return formatPBTask(result.rows[0]);
}

export async function getPBTask(taskID) {
  const result = await pool.query(
    `
      SELECT *
      FROM tasks
      WHERE task_id = $1 AND sprint_id IS NULL AND stage = 'Planning'
    `,
    [taskID]
  );

  return formatPBTask(result.rows[0]);
}

export async function modifyPBTask(taskID, taskInfo) {
  const {
    name,
    description,
    storyPoint,
    priorityRating,
    assignee,
    status,
    stage,
  } = taskInfo;

  const result = await pool.query(
    `
      UPDATE tasks
      SET 
        name = $1,
        description = $2,
        story_point = $3,
        priority_rating = $4,
        assignee = $5,
        status = $6,
        stage = $7
      WHERE task_id = $8 AND sprint_id IS NULL AND stage = 'Planning'
      RETURNING *
    `,
    [
      name,
      description,
      storyPoint,
      priorityRating,
      assignee,
      status,
      stage,
      taskID,
    ]
  );

  return formatPBTask(result.rows[0]);
}

export async function deletePBTask(taskID) {
  const result = await pool.query(
    `
        DELETE FROM tasks
        WHERE task_id = $1 AND sprint_id IS NULL AND stage = 'Planning'
    `,
    [taskID]
  );

  return result.rowCount;
}

export async function movePBTasks(sprintID, taskIDs) {
  const promiseTasks = taskIDs.map(async (taskID) => {
    const result = await pool.query(
      `
            UPDATE tasks
            SET sprint_id = $1,
                stage = 'Development'
            WHERE task_id = $2 AND sprint_id IS NULL AND stage = 'Planning'
            RETURNING *
        `,
      [sprintID, taskID]
    );

    return formatSBTask(result.rows[0]);
  });

  return Promise.all(promiseTasks);
}

export async function getPBTaskNames() {
  const result = await pool.query(`
    SELECT task_id, name
    FROM tasks
    WHERE sprint_id IS NULL AND stage = 'Planning'
  `);

  return result.rows.map((taskName) => ({
    taskID: taskName.task_id,
    name: taskName.name,
  }));
}
