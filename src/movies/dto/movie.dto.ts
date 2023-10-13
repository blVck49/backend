import { IsNotEmpty, IsString, IsInt } from "class-validator"


export class createDto {


    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    image: string


}
