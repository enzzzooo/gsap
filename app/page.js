import Image from "next/image";
export default function page() {
  return (
    <>
      <section className="skill-set px-12 w-screen h-full bg-blue">
        <Image
          src="https://images.pexels.com/photos/18221948/pexels-photo-18221948/free-photo-of-beautiful-brunette-woman-in-white-off-the-shoulder-dress-standing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="1st Image"
          width={1260}
          height={750}
          objectfit="contain"
          className="max-w-[70vw] max-h-[60vh] m-auto"
        ></Image>
        first
      </section>
      <section className="skill-set px-12 w-screen h-full bg-black">
        <Image
          src="https://images.pexels.com/photos/17668734/pexels-photo-17668734/free-photo-of-builders-at-facade-of-modern-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="2nd Image"
          width={1260}
          height={750}
          objectfit="contain"
          className="max-w-[70vw] max-h-[60vh] m-auto"
        ></Image>
        second
      </section>
      <section className="skill-set px-12 w-screen h-[50vh] bg-stone-400">
        End
      </section>
    </>
  );
}
