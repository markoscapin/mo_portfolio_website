import Image from "next/image";

export default function Header() {
  return (
    <ul className="list-none flex flex-row columns-10 mx-auto">
      <li className="columns-2">Our Products</li>
      <li className="columns-2">About Us</li>
      <li className="columns-2">
        <Image
          src="/assets/logo/logomobileoutfitters.svg"
          width={200}
          height={100}
          alt="logo-mo"
          className=""
        ></Image>
      </li>
      <li className="columns-2">Support</li>
      <li className="columns-2">Become a Partner</li>
    </ul>
  );
}
