import { Background } from "components/Background"
import { Sidebar } from "components/Sidebar"
import dynamic from "next/dynamic"
import { FC, memo, ReactNode } from "react"

const Header = dynamic<any>(
  () => import("components/Header").then(mod => mod.Header),
  { ssr: false }
)

const Footer = dynamic<any>(
  () => import("components/Footer").then(mod => mod.Footer),
  { ssr: false }
)

export interface IPageLayoutProps {
  children: ReactNode
}

export const PageLayoutComponent: FC<IPageLayoutProps> = ({ children }) => {
  return (
    <Background>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex flex-col p-8 grow xl:p-0 xl:container xl:mx-auto">
          {children}
        </main>
      </div>
      <div className="p-8"></div>
      <Footer />
      <Sidebar />
    </Background>
  )
}

export const PageLayout = memo(PageLayoutComponent)
