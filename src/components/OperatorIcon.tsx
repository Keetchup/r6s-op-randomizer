import React from 'react'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Tooltip from '@mui/material/Tooltip'
import { Operator } from '../types'

type OperatorIconProps = {
    operator: Operator
    handleClick: (o: Operator) => void
}

const OperatorIcon: React.FC<OperatorIconProps> = ({ operator, handleClick }) => {
    const onClick = () => {
        handleClick(operator)
    }

    return (
        <Button onClick={onClick}>
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={operator.selected
                    ? <CheckCircleIcon/>
                    : <></>
                }
            >
                <Tooltip title={operator.name.toUpperCase()} arrow>
                    <Avatar
                        variant="square"
                        src={operator.icon}
                        sx={{
                            width: 96,
                            height: 96,
                            backgroundColor: '#eeeeee',
                            filter: `grayscale(${operator.selected ? 0 : 1})`
                        }}
                    />
                </Tooltip>
            </Badge>
        </Button>

    )
}

export default OperatorIcon
