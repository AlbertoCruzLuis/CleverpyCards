import { useQuery } from "@tanstack/react-query"

// Documentation: https://avatars.dicebear.com/

interface IuseAvatarProps {
  seed: string
}

export const useAvatar = ({ seed }: IuseAvatarProps) => {
  const { data: avatar } = useQuery(["avatar", seed], async () => {
    const response = await fetch(`https://avatars.dicebear.com/api/miniavs/${seed}.svg`)
    const avatarSvgString = await response.text()
    return avatarSvgString
  })

  return { avatar }
}
