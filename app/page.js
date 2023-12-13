import HorizontalGallery from "./HorizontalGallery";
export default function page() {
  return (
    <>
      <div className="">
        <div className="w-screen h-screen bg-black text-white text-4xl flex items-center justify-center">
          <p className="animate-bounce">Scroll down</p>
        </div>
        <HorizontalGallery />
        <div className="w-screen h-screen bg-black flex items-center justify-center">
          <p className="animate-bounce">The End</p>
        </div>
      </div>
    </>
  );
}
