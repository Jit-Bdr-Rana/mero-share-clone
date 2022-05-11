import { StudentInterface } from "./studentInterface";

class Student implements StudentInterface{
    name: string;
    roll: number;
    display: (x: number, y: number) => string;

}