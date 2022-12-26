import { atom } from 'recoil'
import { Operator, Operators, OperatorGroupEnum } from './types'
import getOperators from './utils/getOperators'

export const operatorsStateAtom = atom<Operators>({
    key: 'operatorsState',
    default: {
        [OperatorGroupEnum.ATTACKER]:
            getOperators(OperatorGroupEnum.ATTACKER).map(o => ({ ...o, selected: true })),
        [OperatorGroupEnum.DEFENDER]:
            getOperators(OperatorGroupEnum.DEFENDER).map(o => ({ ...o, selected: true }))
    }
})

export const selectedOperatorGroupStateAtom = atom<OperatorGroupEnum>({
    key: 'selectedOperatorGroupState',
    default: OperatorGroupEnum.ATTACKER
})

export const displayedOperatorStateAtom = atom<Operator | undefined>({
    key: 'displayedOperatorState',
    default: undefined
})
