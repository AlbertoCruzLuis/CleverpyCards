import { AnimatePresence, motion } from "framer-motion"
import { useUI } from "hooks/useUI"
import { useEffect } from "react"
import { IoMdClose } from "react-icons/io"

interface ISidebarLayoutProps {
  children: React.ReactNode
}

export const SidebarLayout = ({
  children
}: ISidebarLayoutProps) => {
  const { closeSidebar, isOpenSidebar } = useUI()

  useEffect(() => {
    document.body.style.overflowY = isOpenSidebar ? "hidden" : "scroll"
  }, [isOpenSidebar])

  return (
    <AnimatePresence>
      { isOpenSidebar &&
        <motion.div
          className="fixed top-0 bottom-0 left-0 right-0 z-20 h-screen bg-stone-900/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute right-0 h-full xs:w-full"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
          >
            <div className="flex flex-col h-full bg-[#1D0327] w-[28rem] xs:w-full">
              <div className="flex justify-between p-4">
                <button onClick={closeSidebar} className="flex items-center gap-2">
                  <IoMdClose className="text-white" size="1.2rem" />
                  <span>Close</span>
                </button>
              </div>
              {children}
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}
