import CleverpyIcon from "assets/icons/DrawArrow"
import { FC, memo } from "react"

export interface ILogoProps {
  width?: string,
  height?: string
}

const LogoComponent: FC<ILogoProps> = ({
  width = "50",
  height = "50"
}) => {
  return (
    <div className="flex items-center gap-1">
      <CleverpyIcon
        width={width}
        height={height}
      />
    </div>
  )
}

export const Logo = memo(LogoComponent)
