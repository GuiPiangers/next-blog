import Image from 'next/image'

function MyProfilePic() {
  return (
    <div className="mt-8 flex justify-center">
      <Image
        className="rounded-full "
        src="/images/gui-3.png"
        width={180}
        height={180}
        alt="Guilherme"
        priority={true}
      />
    </div>
  )
}

export default MyProfilePic
