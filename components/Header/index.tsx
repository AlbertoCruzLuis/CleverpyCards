import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { CustomLink } from "components/CustomLink"
import { ILogoProps } from "components/Logo"
import { useUI } from "hooks/useUI"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BiUser } from "react-icons/bi"
import { useWindowSize } from "react-use"

const Logo = dynamic<ILogoProps>(
  () => import("components/Logo").then(mod => mod.Logo),
  { ssr: false }
)

export const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const { width } = useWindowSize()
  const [isUpScroll, setUpScroll] = useState(true)
  const [positionScroll, setPositionScroll] = useState(0)
  const router = useRouter()
  const { openSidebar } = useUI()

  useEffect(() => {
    setTimeout(() => {
      setOpen(false)
    }, 1000)
  }, [router.asPath, location.href])

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "scroll"
  }, [isOpen])

  useEffect(() => {
    width > 640 && setOpen(false)
  }, [width])

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== isUpScroll) setUpScroll(isShow)
      setPositionScroll(currPos.y)
    },
    [positionScroll]
  )

  return (
    <header className={`${positionScroll > -100 && "bg-transparent"} transition-all bg-[#1D0327] sticky top-0 z-20 px-8 py-4`}>
      <div className="flex items-center justify-between mx-auto xl:container">
        <div className="flex divide-x divide-gray-500">
          <CustomLink className="pr-5" href="/">
            <Logo />
          </CustomLink>
        </div>
        <div className="">
          <div className="flex gap-8">
            <button className="relative" onClick={openSidebar}>
              <BiUser size="1.2rem" className="text-neutral-200" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
