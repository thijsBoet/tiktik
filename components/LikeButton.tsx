import React, { useState, useEffect } from 'react';
import { MdFavorite } from 'react-icons/md';
import useAuthStore from '../store/authStore';

interface IProps {
	handleLike: () => void;
	handleDisLike: () => void;
	likes: any[];
}

const LikeButton = ({ likes, handleLike, handleDisLike }: IProps) => {
	const [alreadyLiked, setAlreadyLiked] = useState(false);
	const { userProfile }: any = useAuthStore();
	const filterLikes = likes?.filter(item => item._ref === userProfile?._id);

	useEffect(() => {
		return filterLikes?.length > 0
			? setAlreadyLiked(true)
			: setAlreadyLiked(false);
	}, [filterLikes, likes]);

	return (
		<div className='flex gap-6'>
			<div className='mt-4 flex flex-col justify-center items-center cursor-pointer'>
				{alreadyLiked ? (
					<div className='bg-primary rounded-full p-2 mdLp-4 text-[#F51997]'>
						<MdFavorite
							className='text-lg md:text-2xl'
							onClick={handleDisLike}
						/>
					</div>
				) : (
					<div>
						<MdFavorite className='text-lg md:text-2xl' onClick={handleLike} />
					</div>
				)}
				<p className='text-md font-semibold'>{likes?.length | 0}</p>
			</div>
		</div>
	);
};

export default LikeButton;
