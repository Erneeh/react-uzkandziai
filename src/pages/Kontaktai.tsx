import { HiOutlinePhone } from 'react-icons/hi';
import { SiFacebook } from 'react-icons/si';
import { TbMail } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const kontaktai = [
	{

    icon: <HiOutlinePhone size={28}/>,
		href: "tel:+37062699956",
		label: "Telefono numeris",
		handle: "+37062699956",
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
				<div className="grid w-full grid-cols-2 gap-8 mx-auto mt-16 sm:mt-0 mb-5 lg:grid-cols-4 lg:gap-16 border-black">
					{kontaktai.map((items) => (
							<Link
								to={items.href}
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48 col-span-2 md:p-16 border-black border rounded-3xl hover:scale-105"
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
					<iframe 
					 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d42411.004129667366!2d24.25546070893971!3d56.03678818649622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1slt!2slt!4v1729107789429!5m2!1slt!2slt" 
					className='w-full lg:col-start-2 lg:col-end-4 col-span-2 h-96  rounded-3xl border border-black'
					loading="lazy" 
					referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div>
    </div>
  </>
};

export default Kontaktai;