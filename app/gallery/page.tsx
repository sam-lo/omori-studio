export default function Gallery() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center space-y-4 px-24 pt-16 selection:bg-red-200">
          <div className="text-4xl font-serif text-red-900">
            Our Project Gallery
          </div>
          <div className="text-2xl font-serif text-red-900 opacity-80">
            See some of our past projects
          </div>
        </div>
      </div>
      <AdobePortfolio />
    </>
  )
}

function AdobePortfolio() {
  return (
    <iframe className="my-8 px-2 flex w-full h-[1550px]" src="https://omorigallery.myportfolio.com/" />
  )
}