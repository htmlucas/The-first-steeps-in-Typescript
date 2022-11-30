import { Request,Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response){

    CreateCourseService.execute({name:"NodeJS",duration:10,educator:"Lucas"}); //os parametros podem ser passados na ordem que eu quiser
    CreateCourseService.execute({name:"Typescript",educator:"Vinicius"}); 

    return response.send();
}