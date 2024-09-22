import { IsNotEmpty, IsString } from "class-validator";





export class CreateUsuarioDto {
@IsString()
@IsNotEmpty()
name: string;


@IsString()
@IsNotEmpty()
apellido: string;


@IsString()
@IsNotEmpty()
password: string;
    
    
}
