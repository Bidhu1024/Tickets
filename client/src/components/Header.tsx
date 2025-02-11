import { Typography } from "@mui/material"
import { FC } from "react"

interface HeaderProp{
    title:string
}
const Header:FC<HeaderProp> = ({title}) => {
  return (
<Typography fontWeight={"600"} fontSize={"1.5rem"}>
    {title}
</Typography>
  )
}

export default Header
