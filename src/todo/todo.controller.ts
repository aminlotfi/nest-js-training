import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {TodoService} from "./todo.service";
import {Todo} from "./schemas/todo.schema";
import {CreateTodoDto} from "./dto/create-todo.dto";
import {UpdateTodoDto} from "./dto/update-todo.dto";

@Controller('todo')
export class TodoController {
    constructor(private readonly service: TodoService) {
    }

    @Get()
    async findAll(): Promise<Todo[]> {
        return await this.service.findAll();
    }

    @Get(':id')
    async findOne(id: string): Promise<Todo> {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return await this.service.create(createTodoDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
        return await this.service.update(id, updateTodoDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Todo> {
        return await this.service.remove(id);
    }
}
