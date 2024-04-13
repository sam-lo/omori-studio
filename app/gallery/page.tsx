export default function Gallery() {

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center space-y-4 sm:px-24 pt-16 selection:bg-red-200">
          <div className="text-4xl font-serif text-center text-red-900">
            Our Project Gallery
          </div>
          <div className="text-2xl font-serif text-center text-red-900 opacity-80">
            See some of our past projects
          </div>
        </div>
      </div>
      <iframe className=" my-8 px-2 flex w-full h-screen" src="https://omorigallery.myportfolio.com/"/>
    </>
  )
}