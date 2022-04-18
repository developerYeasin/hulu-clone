import Image from "next/image";
import HeaderItem from "./HeaderItem";

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center m-5 h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title={"home"} Icon={HomeIcon} />
        <HeaderItem title={"trenging"} Icon={LightningBoltIcon} />
        <HeaderItem title={"verified"} Icon={BadgeCheckIcon} />
        <HeaderItem title={"collections"} Icon={CollectionIcon} />
        <HeaderItem title={"search"} Icon={SearchIcon} />
        <HeaderItem title={"Account"} Icon={UserIcon} />
      </div>
      <Image src="https://links.papareact.com/ua6" height={100} width={200} />
    </header>
  );
};

export default Header;
