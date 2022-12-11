import { challenge } from "../constants";

const Footer = () => {
	return (
		<div className='static'>
			{challenge.map((credit) => (
				<footer
					key={credit.id}
					className='bg-netral-v-d-blue bg-opacity-70  text-center'
				>
					<h5 className='text-netral-white text-center p-4 text-[9px]'>
						Challenge by{" "}
						<span className='cursor-pointer ease-in-out duration-300 hover:text-primary-red md:font-bold'>
							<a target='_blank' rel='noreferrer' href={credit.linkMentor}>
								{credit.challengeBy}
							</a>
						</span>{" "}
						Coded by{" "}
						<span className='cursor-pointer ease-in-out duration-300 hover:text-primary-red md:font-bold'>
							{" "}
							<a target='_blank' rel='noreferrer' href={credit.linkCoder}>
								{credit.CodedBy}
							</a>
						</span>
					</h5>
				</footer>
			))}
		</div>
	);
};

export default Footer;
