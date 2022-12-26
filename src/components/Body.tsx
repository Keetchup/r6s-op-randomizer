import React from 'react'
import Box from '@mui/material/Box'
import { useRecoilValue } from 'recoil'
import { selectedOperatorGroupStateAtom } from '../atoms'
import OperatorList from './OperatorList'
import OperatorCard from './OperatorCard'

const Body: React.FC = () => {
    const selectedOperatorGroup = useRecoilValue(selectedOperatorGroupStateAtom)
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                ml: 2,
                mr: 20
            }}
        >
            <OperatorList perRow={7} group={selectedOperatorGroup}/>
            <OperatorCard/>
        </Box>
    )
}

export default Body
