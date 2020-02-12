import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../tasks.model";

export class TaskStatusValidationPipe implements PipeTransform {

    readonly statusAllowed = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE
    ];

    transform(value: any){
        value = value.toUpperCase();
        
        if(!this.isValidStatus(value)){
            throw new BadRequestException(`${value} is an invalid status`);
        }

        return value;
    }

    private isValidStatus( value: any){
        const index = this.statusAllowed.indexOf(value);

        return index !== -1;
    }
}