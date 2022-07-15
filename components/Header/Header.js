import Image from "next/image";
import Container from "../Layout/Container";

export default function Header() {
  return (
    <div className="sticky top-5 w-screen z-10 my-5">
      <Container>
        <ul className="list-none flex flex-row justify-between items-center bg-transparent font-medium text-xl text-slate-700">
          <li className="">Our Products</li>
          <li className="">About Us</li>
          <li className="">
            <div>
              <Image
                src="/assets/logo/logomobileoutfitters.svg"
                width={200}
                height={100}
                alt="logo-mo"
              ></Image>
            </div>
          </li>
          <li className="">Support</li>
          <li className="">Become a Partner</li>
        </ul>
      </Container>
    </div>
  );
}
