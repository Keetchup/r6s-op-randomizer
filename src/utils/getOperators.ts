import { Operator, OperatorGroupEnum } from '../types'
import OperatorsAll from '../assets/operators.json'

export default function getOperators (group: OperatorGroupEnum): Array<Operator> {
    const { attackers, defenders } = OperatorsAll
    switch (group) {
    case OperatorGroupEnum.ATTACKER:
        return attackers
    case OperatorGroupEnum.DEFENDER:
        return defenders
    }
}
