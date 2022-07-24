import { CustomLink } from "components/CustomLink"
import { Logo } from "components/Logo"
import { BsGithub, BsTwitter } from "react-icons/bs"

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="p-8 bg-[#1D0327]">
      <div className="mx-auto xl:container">
        <div className="grid grid-cols-4 gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <CustomLink href="/">
              <Logo width="90" height="90" />
            </CustomLink>
            <p className="max-w-sm font-semibold text-white">Cleverpy Cards</p>
            <div className="flex gap-4">
              <CustomLink href="" className="p-2 border-2 border-neutral-700">
                <BsTwitter size="1.2rem" className="transition-all text-neutral-400 hover:text-white" />
              </CustomLink>
              <CustomLink href="" className="p-2 border-2 border-neutral-700">
                <BsGithub size="1.2rem" className="transition-all text-neutral-400 hover:text-white" />
              </CustomLink>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
            <ul className="text-neutral-400">
              <li className="mb-4">
                <CustomLink href="/" className="hover:underline">Home</CustomLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
            <ul className="text-neutral-400">
              <li className="mb-4">
                <CustomLink href="" className="hover:underline ">Github</CustomLink>
              </li>
              <li>
                <CustomLink href="" className="hover:underline">Twitter</CustomLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
            <ul className="text-neutral-400">
              <li className="mb-4">
                <CustomLink href="/" className="hover:underline">Privacy Policy</CustomLink>
              </li>
              <li>
                <CustomLink href="#" className="hover:underline">Terms &amp; Conditions</CustomLink>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-neutral-800/50 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-neutral-400 sm:text-center">© {year} <CustomLink href="/" className="hover:underline">Cleverpy™</CustomLink>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
