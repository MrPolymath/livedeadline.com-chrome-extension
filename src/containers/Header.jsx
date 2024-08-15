import React from "react";
import { Disclosure } from "@headlessui/react";
import Logo from "./../assets/img/favicon-32x32.png";
import { useSettingsStore } from "../common/useSettingsStore";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [settings, setSettings] = useSettingsStore();
  const updatePage = (page) => {
    setSettings((prevState) => {
      return {
        ...prevState,
        activePage: page,
      };
    });
  };
  const activePage = settings.activePage;
  const navigation = [
    {
      name: "Countdown",
      key: "countdown",
      current: activePage === "countdown",
    },
    { name: "Pizza", key: "pizza", current: activePage === "pizza" },
  ];
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src={Logo}
                    alt="Live Deadline logo"
                  />
                </div>
                <div className="">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <div
                        key={item.key}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => updatePage(item.key)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href={`chrome-extension://${chrome.runtime.id}/options.html`}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Settings
              </a>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
