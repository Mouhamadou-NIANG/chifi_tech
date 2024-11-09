import React from 'react'
import { Box } from '@mui/material'

export default function HomeTitle() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }} >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: '#cfe8fc',
                    height: '30vh',
                    width: '50%',
                    color: "white",
                    fontSize: "1.2rem",
                    backgroundColor: "#0000004f",
                    textAlign: 'center',
                    marginTop: "6%",
                    borderRadius : "40px"

                }}
            >
                <div>
                    <h1>Bienvenue sur mon Portfolio !</h1>
                    <p>Ingénieur logiciel, innovateur, problem-solver.</p>
                </div>
            </Box>
        </div>

    )
}
