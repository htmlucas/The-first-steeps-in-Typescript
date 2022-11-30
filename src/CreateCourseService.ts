/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course{
    name:string; 
    duration?: number; //usando ? define que é opcional
    educator: string;
}
// usando interface para passar a tipagem do que ele espera de parametro na função logo em baixo


class CreateCourseService {
            //conseguimos definir como default logo aqui o valor da duration, caso nao seja enviado
    execute({duration = 8, educator, name}: Course){ //desestruturação do que espera no execute, ela independe da ordem
        console.log(name,duration,educator);
    }

}

export default new CreateCourseService();