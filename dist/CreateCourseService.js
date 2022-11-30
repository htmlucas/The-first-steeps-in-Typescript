"use strict";
/**
 * name - string
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    //conseguimos definir como default logo aqui o valor da duration
    execute({ duration = 8, educator, name }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
