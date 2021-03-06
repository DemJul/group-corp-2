import {ICoordinates, ISnake} from '../interface/ShakeInterface';

export class Snake implements ISnake{
    // если бы наследовал от абстрактного класса, был бы possibleDirection и direction private
    readonly possibleDirection: [string, string, string, string];
    readonly body: Array<ICoordinates>;
    direction: string;

    constructor(){
        this.possibleDirection = ['up', 'down', 'left', 'right'];

        this.body = [{
            x: 1,
            y: 1,
        }];

        this.direction = 'down';
    }

    public changeDirection(newDirection: string): void{
        if(!this.possibleDirection.includes(newDirection)){
            throw new Error(`Передано недопустимое направление движения: ${newDirection}`);
        }

        if(this.isOppositeDirection(newDirection)){
            return;
        }

        this.direction = newDirection;
    }

    public isOppositeDirection(newDirection: string): boolean{
        if(this.direction === 'down' && newDirection === 'up'){
            return true;
        }

        if(this.direction === 'up' && newDirection === 'down'){
            return true;
        }

        if(this.direction === 'left' && newDirection === 'right'){
            return true;
        }

        if(this.direction === 'right' && newDirection === 'left'){
            return true;
        }

        return false;
    }

    //Следующий шаг змейки
    public performStep(): void{
        let currentHeadCoords: ICoordinates = this.body[0]; //Head
        let newHeadCoords: ICoordinates  = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y,
        };

        switch(this.direction){
            case 'down':
                newHeadCoords.y++;
                break;
            case 'up':
                newHeadCoords.y--;
                break;
            case 'left':
                newHeadCoords.x--;
                break;
            case 'right':
                newHeadCoords.x++;
                break;
        }

        this.body.unshift(newHeadCoords);
        this.body.pop();
    }

    //Увеличение тела змейки
    public increaseBody(): void{
        let bodyLastCell: ICoordinates = this.body[this.body.length - 1];
        let newBodyLastCell: ICoordinates = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };

        this.body.push(newBodyLastCell);
    }
}