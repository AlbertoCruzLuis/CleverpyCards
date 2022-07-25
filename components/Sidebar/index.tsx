import { Button } from "components/Button"
import { Logo } from "components/Logo"
import { useAuth } from "hooks/useAuth"
import { useUI } from "hooks/useUI"
import { SidebarLayout } from "layouts/SidebarLayout"

export const Sidebar = () => {
  const { logOut } = useAuth()
  const { closeSidebar } = useUI()

  const handleLogOut = () => {
    logOut()
    closeSidebar()
  }

  return (
    <SidebarLayout>
      <div className="flex flex-col items-center justify-center flex-1">
        <Logo width="120" height="120" />
        <Button variant="primary" onClick={handleLogOut}>
          <span>Log out</span>
        </Button>
      </div>
    </SidebarLayout>
  )
}
