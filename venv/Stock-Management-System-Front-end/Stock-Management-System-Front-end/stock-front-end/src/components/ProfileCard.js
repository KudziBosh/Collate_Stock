import {BsChevronExpand} from 'react-icons/bs'
function ProfileCard(){
    return(
        <div class="flex items-center space-x-4 border-l">
		<div class="flex-shrink-0">
			<img class="w-8 h-8 rounded-full" src="https://source.unsplash.com/75x75/?portrait" alt="Neil image"/>
		</div>
		<div class="flex-1 min-w-0">
			<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
				Neil Sims
			</p>
			<p class="flex flex-row text-sm text-gray-500 truncate dark:text-gray-400">
				email@windster.com<BsChevronExpand/>
			</p>
		</div>
		
	</div>
    )
}
export default ProfileCard;
