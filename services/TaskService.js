import database from '../models';
import { DoesNotExist } from '../base/exceptions';

export default class TaskService {
  static async getAllTasks() {
    return database.Task.findAll();
  }

  static async addTask(newTask) {
    return database.Task.create(newTask);
  }

  static async getTaskById(id) {
    const task = await database.Task.findByPk(id);
    if (task === null) {
      throw new DoesNotExist();
    }
    return task;
  }

  static async updateTask(id, updateTask) {
    const taskToUpdate = await this.getTaskById(id);

    if (taskToUpdate) {
      await database.Task.update(updateTask, {
        where: {
          id: +id
        }
      });

      return updateTask;
    } else {
      throw new DoesNotExist();
    }
  }

  static async deleteTask(id) {
    const task = await this.getTaskById(id);

    if (task) {
      await database.Task.destroy({
        where: {id: +id}
      });
    } else {
      throw new DoesNotExist();
    }
  }

  static async completeTask(id) {
    const task = await this.getTaskById(id);

    if (task) {
      await database.Task.update({
        completed: true
      }, {
        where: {id: +id}
      });
    } else {
      throw new DoesNotExist();
    }
  }
}
