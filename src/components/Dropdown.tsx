import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden z-50 ">
      <Menu>
        <Menu.Button>
          <AiOutlineMenu />
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="flex-col absolute right-20 translate-x-1/2 mt-3 p-7 sm:min-w-[300px] min-w-max rounded-xl bg-white border border-nav-border shadow-menu">
            <ul className="flex flex-col">
              {links.map((link) => (
                /* Use the `active` state to conditionally style the active item. */
                <Menu.Item key={link.href} as={Fragment}>
                  {({ active }) => (
                    <a
                      href={link.href}
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </ul>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
