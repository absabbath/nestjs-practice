import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dtos/create-task.dto';
import { GetTaskFilterDto } from './dtos/get-task-filter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getTasks(@Query() filterDto: GetTaskFilterDto): Task[]{
        
        if(Object.keys(filterDto).length){
            return this.tasksService.getTaskWithFilters(filterDto);
        }
        
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task{
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void{
        this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status: TaskStatus
    ){
        return this.tasksService.updateTaskStatus(id, status);
    }

}
