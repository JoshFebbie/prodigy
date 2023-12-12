import { UserButton } from '@clerk/nextjs'

import MobileSidabar from '@/components/mobile-sidabar'

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
        <MobileSidabar />
        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/' />
        </div>
    </div>
  )
}

export default Navbar