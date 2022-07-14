import Image from "next/image";
import Container from "../Layout/Container";
export default function Header() {
  return (
    <div className="sticky top-0 w-screen z-10">
      <Container>
        <ul className="list-none flex flex-row justify-between bg-transparent">
          <li className="">Our Products</li>
          <li className="">About Us</li>
          <li className="">
            <Image
              src="/assets/logo/logomobileoutfitters.svg"
              width={200}
              height={100}
              alt="logo-mo"
              className=""
            ></Image>
          </li>
          <li className="">Support</li>
          <li className="">Become a Partner</li>
        </ul>
      </Container>
    </div>
  );
}
