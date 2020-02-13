import { IsString, MinLength, MaxLength } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(10)
    username: string;

    @IsString()
    @MinLength(4)
    @MaxLength(10)
    password: string;
}