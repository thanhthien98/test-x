import Image from "next/image";

const obj = [
  {
    number: "$1.80B",
    text: "30 Day Volume",
  },
  {
    number: "$0.84B",
    text: "Managed on testX.fi",
  },
  {
    number: "$21.43M",
    text: "Total Collateral Automated",
  },
];

const menu = ["products", "Protocols", "Tokens", "Tokens", "Use Cases"];

export default function Home() {
  return (
    <div>
      <header className="bg-white flex flex-col items-center pt-3">
        <div className="w-full w-max-[1200] flex justify-center max-md:max-w-full pr-[11px]">
          <div className="ml-9 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
              <Image
                className="aspect-[1.98] object-contain object-center overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                src="/logo.png"
                alt="Logo"
                loading="lazy"
                width={260}
                height={135}
              />
            </div>
            <nav className="flex flex-col items-stretch w-[76%] ml-[72px] max-md:w-full max-md:ml-0">
              <div className="bg-[#F7BDCC] flex w-full items-center justify-between m-auto pl-8 pr-3.5 py-2 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pl-5">
                <div className="flex items-stretch justify-between gap-[80px] my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <a
                    href="#"
                    className="text-[#596F78] text-sm font-bold leading-5 whitespace-nowrap"
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    className="text-[#596F78] text-sm font-bold leading-5"
                  >
                    Protocols
                  </a>
                  <a
                    href="#"
                    className="text-[#596F78] text-sm font-bold leading-5"
                  >
                    Tokens
                  </a>
                  <a
                    href="#"
                    className="text-[#596F78] text-sm font-bold leading-5 whitespace-nowrap"
                  >
                    Use Cases
                  </a>
                </div>
                <div className="shadow-sm bg-white w-[230px] h-[30px] self-stretch flex items-stretch justify-center gap-1  pl-10 pr-8 pt-[5.5px] pb-[8px] ml-[92px] rounded-[32px] max-md:px-5">
                  <div className="text-[#17344F] text-center text-base font-bold leading-6 whitespace-nowrap">
                    Connect Wallet
                  </div>
                  <div className="text-blue-950 text-center text-base leading-6 self-center whitespace-nowrap my-auto">
                    →
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="self-stretch flex w-full max-w-[1200px] mx-auto flex-col px-4 py-12 max-md:max-w-full">
          <div className="self-center flex w-full justify-between pr-[80px] mt-12 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <h1 className="text-white text-[69px]  leading-[80px] tracking-widest-[1.52px] grow shrink basis-auto mt-3 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
              Explore and Earn <br />
              <span className="flex ">
                <span>on</span>
                <span className="pt-4 ml-2">
                  <Image
                    className=" object-contain object-center overflow-hidden "
                    src="/logo-removebg.png"
                    alt="Logo"
                    loading="lazy"
                    width={135}
                    height={83}
                  />
                </span>
              </span>
            </h1>
            <div className="shadow-sm bg-white w-[225px] h-[121px] flex  flex-col justify-center items-center pt-[34px] pb-3 rounded-3xl max-md:px-5">
              <div>
                <Image
                  className="object-contain object-center overflow-hidden "
                  src="/logo.png"
                  alt="Logo"
                  loading="lazy"
                  width={104}
                  height={54}
                />
              </div>
              <p className="text-center text-[#8795AF] text-[12px] leading-6">
                test Front end interview 1
              </p>
            </div>
          </div>
          <div className="bg-[#F2F5FA] flex w-[423px] flex-col justify-end mt-11 pr-[9px] py-1.5 rounded-[32px] self-start items-end max-md:mt-10 max-md:pl-5">
            <a
              href="#"
              className="text-[#17344F] text-center text-base leading-[22px] whitespace-nowrap shadow-sm bg-rose-300 justify-center items-stretch px-8 py-2 rounded-[32px] max-md:px-5"
            >
              Sign up
            </a>
          </div>
          <div className="flex max-w-full gap-[42px] items-center justify-between mt-5 self-start max-md:ml-2.5">
            <a
              href="#"
              className="text-white text-center text-lg font-bold leading-[37.8px] bg-[#7BB8F1]  w-[174px] h-[40px]  rounded-[32px] max-md:px-5"
            >
              Log in
            </a>
            <button className="text-blue-950 text-center text-base font-bold leading-6 shadow-sm bg-white w-[203px] h-[40px] rounded-[32px] max-md:px-5">
              Launch App
            </button>
          </div>
          <div className="border bg-white bg-opacity-50 self-stretch flex flex-col justify-center items-center mt-[85px] mb-7 px-16 py-12 rounded-3xl border-solid border-white max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-full max-w-[941px] justify-between gap-5 items-start max-md:max-w-full-md:flex-wrap max-md:justify-center">
              {obj.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex grow basis-[0%] flex-col items-stretch"
                  >
                    <div className="text-[#17344F] text-center text-[49px] leading-[64px] max-md:text-4xl max-md:leading-[54px]">
                      {item.number}
                    </div>
                    <div className="text-[#596F78] text-center text-base leading-6 whitespace-nowrap mt-[13px]">
                      {item.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
