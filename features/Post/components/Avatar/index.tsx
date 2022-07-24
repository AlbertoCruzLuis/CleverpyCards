import { useAvatar } from "features/Post/hooks/useAvatar"
import parse from "html-react-parser"

export interface IAvatarProps {
  seed: string,
  size?: number,
}

export const Avatar = ({ seed, size = 32 }: IAvatarProps) => {
  const { avatar } = useAvatar({ seed })

  return (
    <div style={{
      width: size,
      height: size
    }}>
      { avatar && parse(avatar) }
    </div>
  )
}
