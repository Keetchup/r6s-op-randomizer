import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import CasinoIcon from '@mui/icons-material/Casino'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import SecurityIcon from '@mui/icons-material/Security'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { displayedOperatorStateAtom, operatorsStateAtom, selectedOperatorGroupStateAtom } from '../atoms'
import { OperatorGroupEnum } from '../types'

const ToolBar: React.FC = () => {
    const [operators, setOperators] = useRecoilState(operatorsStateAtom)
    const [selectedOperatorGroup, setSelectedOperatorGroup] = useRecoilState(selectedOperatorGroupStateAtom)
    const setDisplayedOperator = useSetRecoilState(displayedOperatorStateAtom)

    const onRandomClick = () => {
        const selectedOperators = operators[selectedOperatorGroup].filter(o => o.selected)
        if (selectedOperators.length === 0) {
            setDisplayedOperator(undefined)
        } else {
            const index = Math.floor(Math.random() * selectedOperators.length)
            setDisplayedOperator(selectedOperators[index])
        }
    }

    const onTabChange = (event: React.SyntheticEvent, newValue: OperatorGroupEnum) => {
        setSelectedOperatorGroup(newValue)
    }

    const onSelectAllClick = () => {
        const newOps = operators[selectedOperatorGroup].map(o => ({ ...o, selected: true }))
        setOperators({ ...operators, [selectedOperatorGroup]: newOps })
    }

    const onUnselectAllClick = () => {
        const newOps = operators[selectedOperatorGroup].map(o => ({ ...o, selected: false }))
        setOperators({ ...operators, [selectedOperatorGroup]: newOps })
    }

    return (
        <Toolbar sx={{ mt: 2 }}>
            <Button
                variant="contained"
                startIcon={<CasinoIcon/>}
                onClick={onRandomClick}
            >
                <Typography mt={0.5}>
                    Random
                </Typography>
            </Button>
            <Tabs value={selectedOperatorGroup} onChange={onTabChange} sx={{ ml: 4 }}>
                <Tab
                    label={<Typography mt={0.5}>Attackers</Typography>}
                    icon={<LocalDiningIcon/>}
                    iconPosition="start"
                />
                <Tab
                    label={<Typography mt={0.5}>Defenders</Typography>}
                    icon={<SecurityIcon/>}
                    iconPosition="end"
                />
            </Tabs>
            <ButtonGroup sx={{ ml: 4 }}>
                <Button
                    variant="contained"
                    startIcon={<CheckBoxIcon/>}
                    onClick={onSelectAllClick}
                >
                    <Typography mt={0.5}>
                        Select All
                    </Typography>
                </Button>
                <Button
                    variant="contained"
                    endIcon={<CheckBoxOutlineBlankIcon/>}
                    onClick={onUnselectAllClick}
                >
                    <Typography mt={0.5}>
                        Unselect All
                    </Typography>
                </Button>
            </ButtonGroup>
        </Toolbar>
    )
}

export default ToolBar
