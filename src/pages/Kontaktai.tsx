import React from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { SiFacebook } from 'react-icons/si';
import { TbMail } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const kontaktai = [
	{

    icon: <HiOutlinePhone size={28}/>,
		href: "tel:+862699956",
		label: "Telefono numeris",
		handle: "+37062699956",
	},
	{
		icon: <SiFacebook size={28}/>,
		href: "https://www.facebook.com/",
		label: "Facebook",
		handle: "Užkandėlė",
	},
	{
		icon: <TbMail size={28}/>,
		href: "mailto:sssaulute470@gmail.com",
		label: "El. paštas",
		handle: "Sandra U.",
	},
];

function Kontaktai() {
  return <>
   <div className="bg-headerColor min-h-screen">
   <div className="">
			<div className="container flex flex-grow  items-start md:py-32 py-16 justify-center px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 mb-5 lg:grid-cols-3 lg:gap-16 border-black">
					{kontaktai.map((items) => (
							<Link
								to={items.href}
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16 border-black border rounded-3xl hover:scale-105"
							>
								<span className="relative flex items-center justify-center p-2 w-10 h-10 sm:w-12 sm:h-12 text-sm duration-300    border rounded-full text-textColor group-hover:text-headerFooterText group-hover:bg-buttonColor border-footerColor bg-buttonColor group-hover:border-zinc-200 group-hover:scale-110 sm:group-hover:scale-115 md:group-hover:scale-120 lg:group-hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400">
									{items.icon}
								</span>
								<div className=" flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-headerFooterText group-hover:text-headerFooterText font-display">
										{items.handle}
									</span>
									<span className="mt-4 text-lg text-center duration-1000 text-headerFooterText group-hover:text-headerFooterText">
										{items.label}
									</span>
								</div>
							</Link>
					))}
				</div>
			</div>
		</div>
    </div>
  </>
};

export default Kontaktai;