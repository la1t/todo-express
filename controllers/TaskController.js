import TaskService from '../services/TaskService';
import { DoesNotExist } from '../base/exceptions';


export default class TaskController {
  static async getAllTasks(req, res) {
    const tasks = await TaskService.getAllTasks();

    res.status(200).jsonp(tasks);
  }

  static async addTask(req, res) {
    const data = req.body;
    const task = await TaskService.addTask(data);

    res.status(201).jsonp(task);
  }

  static async getTaskById(req, res) {
    const { id } = req.params;

    try {
      const task = await TaskService.getTaskById(id);
      res.status(200).jsonp(task);
    } catch (err) {
      if (err instanceof DoesNotExist) {
        res.status(404).jsonp({error: 'Task does not exist'});
      } else {
        throw err;
      }
    }
  }

  static async updateTask(req, res) {
    const { id } = req.params;
    const data = req.body;

    try {
      const task = await TaskService.updateTask(id, data);
      res.status(200).jsonp(task);
    } catch (err) {
      if (err instanceof DoesNotExist) {
        res.status(404).jsonp({error: 'Task does not exist'});
      } else {
        throw err;
      }
    }
  }

  static async deleteTask(req, res) {
    const { id } = req.params;

    try {
      await TaskService.deleteTask(id);
      res.status(204).jsonp();
    } catch (err) {
      if (err instanceof DoesNotExist) {
        res.status(404).jsonp({error: 'Task does not exist'});
      } else {
        throw err;
      }
    }
  }

  static async completeTask(req, res) {
    const { id } = req.params;

    try {
      const task = await TaskService.completeTask(id);
      res.status(200).jsonp(task);
    } catch (err) {
      if (err instanceof DoesNotExist) {
        res.status(404).jsonp({error: 'Task does not exist'});
      } else {
        throw err;
      }
    }
  }
}
