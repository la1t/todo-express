import { Router } from 'express';
import TaskController from '../controllers/TaskController';

const router = Router();

router.get('/', TaskController.getAllTasks);
router.post('/', TaskController.addTask);
router.get('/:id', TaskController.getTaskById);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);
router.post('/:id/complete-task', TaskController.completeTask);

export default router;
