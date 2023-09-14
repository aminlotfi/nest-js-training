import { Injectable } from '@nestjs/common';
import {Todo, TodoDocument} from "./schemas/todo.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private readonly model: Model<TodoDocument>) {}
}
