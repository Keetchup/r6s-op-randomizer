import React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { displayedOperatorStateAtom } from '../atoms'

const OperatorCard: React.FC = () => {
    const operator = useRecoilValue(displayedOperatorStateAtom)
    return (
        <>
            {operator !== undefined
                ? <Box
                    sx={{
                        border: 8,
                        borderColor: '#546e7a',
                        borderRadius: 2,
                        backgroundColor: '#cfd8dc'
                    }}
                >
                    <Box
                        component="img"
                        src={operator.portrait}
                        sx={{
                            backgroundColor: '#546e7a',
                            borderBottom: 8,
                            borderColor: '#546e7a'
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        <Avatar
                            variant="square"
                            src={operator.icon}
                            sx={{
                                width: 84,
                                height: 84
                            }}
                        />
                        <Typography variant="h4">
                            {operator.name.toUpperCase()}
                        </Typography>
                    </Box>
                </Box>
                : <></>
            }

        </>
    )
}

export default OperatorCard
