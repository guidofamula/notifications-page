import AvatarNotif from "./AvatarNotif";
import PrivateMessage from "./PrivateMessage";
import { accounts } from "../constants";

const CardAvatar = () => {
	return (
		<div className='flex justify-center flex-col space-y-3'>
			{accounts.map((account) => (
				<AvatarNotif
					srcAvatar={account.avatar}
					name={account.name}
					altAvatar={account.alt}
					about={account.about}
					destiny={account.destiny}
					status={account.status}
					time={account.time}
					imageCommented={account.imageCommented}
					altImageCommented={account.altImageCommented}
					classAbout={account.classAbout}
					classCard={account.classCard}
					children={
						account.isHasChildren ? <PrivateMessage pm={account.pm} /> : ""
					}
				/>
			))}
		</div>
	);
};

export default CardAvatar;
