import Logo from '/images/intake.png'
import Image from 'next/image'

export const NavTitle = () => {
  return (
    <div className="flex items-center gap-x-2 text-2xl font-semibold">
      <Image src={Logo} alt="inTake Logo" height={40} width={40} />
      inTake
    </div>
  )
}

export default NavTitle
