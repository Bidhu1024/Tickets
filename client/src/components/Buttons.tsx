import { Button } from '@mui/material'
import { FC } from 'react'
interface buttonProps{
    name:string
}
const Buttons:FC<buttonProps> = ({name}) => {
  return (
<Button sx={{height:"1.2rem",width:"5rem",mt:"2.8rem"}}>
    {name}

</Button>
  )
}

export default Buttons
