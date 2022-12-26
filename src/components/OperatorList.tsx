import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useRecoilState } from 'recoil'
import { operatorsStateAtom } from '../atoms'
import { Operator, OperatorGroupEnum } from '../types'
import OperatorIcon from './OperatorIcon'

type OperatorsListProps = {
    perRow: number,
    group: OperatorGroupEnum
}

const OperatorList: React.FC<OperatorsListProps> = ({
    perRow,
    group
}) => {
    const [operators, setOperators] = useRecoilState(operatorsStateAtom)
    const ops = operators[group]

    const onIconClick = (operator: Operator) => {
        const index = ops.findIndex(e => e.name === operator.name)
        const newValue = { ...operator, selected: !operator.selected }

        const newOps = [...ops.slice(0, index), newValue, ...ops.slice(index + 1)]
        setOperators({ ...operators, [group]: newOps })
    }

    return (
        <Box sx={{ maxWidth: 850 }}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={1}
                columns={perRow}
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{
                    mt: 4
                }}
            >
                {ops.map(o => (
                    <Grid item xs={1} key={`grid-item-${o.name}`}>
                        <OperatorIcon operator={o} handleClick={onIconClick}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default OperatorList
