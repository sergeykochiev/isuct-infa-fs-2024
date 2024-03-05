import { GameAccount } from "src/gameacc/entity/gameacc.entity"

export class CreateUserDto {
    readonly login: string
    readonly password: string
    readonly gameAccounts?: Array<GameAccount>
}