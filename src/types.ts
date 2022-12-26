export type Operator = {
    name: string
    icon: string
    portrait: string
    selected?: boolean
}

export enum OperatorGroupEnum {
    /* eslint-disable-next-line no-unused-vars */
    ATTACKER,
    /* eslint-disable-next-line no-unused-vars */
    DEFENDER
}

export type Operators = {
    [OperatorGroupEnum.ATTACKER]: Array<Operator>
    [OperatorGroupEnum.DEFENDER]: Array<Operator>
}
