function BarGraph(){
    return(
        <div className="grid grid-cols-4 pt-4 border-l">
            <div className="col-span-2 ">
                <h1 className="ml-2 text-xs font-medium">Job Statistics</h1>
            </div>
            <div>
                <div class="flex items-center ml-auto">
				<span class="block rounded-full w-4 h-4 bg-indigo-100"></span>
				<span class="ml-1 text-xs font-medium">Job view</span>
			</div>
            </div>
            <div>
            <div class="flex items-center ml-auto">
				<span class="block rounded-full w-4 h-4 bg-indigo-500"></span>
				<span class="ml-1 text-xs font-medium">Job Applied</span>
			</div>
            </div>
            <div class="col-span-4 flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg sm:p-8 border-l">
           
		<div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$37,500</span>
				<div class="relative flex justify-center rounded w-full h-8 bg-indigo-100"></div>
				
				<div class="relative flex justify-center rounded w-full h-16 bg-indigo-500"></div>
				<span class="absolute bottom-0 text-xs font-thin">Oct 21</span>
			</div>
			<div class="relative flex flex-col items-center  flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$45,000</span>
				<div class="relative flex justify-center rounded w-full h-10 bg-indigo-100"></div>
				
				<div class="relative flex justify-center rounded w-full h-20 bg-indigo-500"></div>
				<span class="absolute bottom-0 text-xs font-thin">Nov 21</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
				<div class="relative flex justify-center rounded w-full h-10 bg-indigo-100"></div>
				
				<div class="relative flex justify-center w-full h-20 bg-indigo-500 rounded"></div>
				<span class="absolute bottom-0 text-xs font-thin">Dec 21</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$50,000</span>
				<div class="relative flex justify-center w-full h-10 bg-indigo-100 rounded"></div>
				
				<div class="relative flex justify-center w-full h-24 bg-indigo-500 rounded"></div>
				<span class="absolute bottom-0 text-xs font-thin">Jan 22</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
				<div class="relative flex justify-center w-full h-10 bg-indigo-100 rounded"></div>
				
				<div class="relative flex justify-center w-full h-20 bg-indigo-500 rounded"></div>
				<span class="absolute bottom-0 text-xs font-thin">Feb 22</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$55,000</span>
				<div class="relative flex justify-center w-full h-12 bg-indigo-100 rounded"></div>
		
				<div class="relative flex justify-center w-full h-24 bg-indigo-500 rounded"></div>
				<span class="absolute bottom-0 text-xs font-thin">Mar 22</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$60,000</span>
				<div class="relative flex justify-center w-full h-12 bg-indigo-100 rounded"></div>
				
				<div class="relative flex justify-center w-full h-20 bg-indigo-500 rounded"></div>
				<span class="absolute bottom-0 text-xs font-thin">Apr 22</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$57,500</span>
				<div class="relative flex justify-center w-full h-12 bg-indigo-100 rounded"></div>
				
				<div class="relative flex justify-center w-full h-24 bg-indigo-500 rounded"></div>
				<span class="absolute bottom-0 text-xs font-thin">May 22</span>
			</div>
			<div class="relative flex flex-col items-center flex-grow pb-5 group">
				<span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$67,500</span>
				<div class="relative flex justify-center w-full h-12 bg-indigo-100 rounded"></div>
				
				<div class="relative flex justify-center w-full h-32 bg-indigo-500 rounded"></div>
				<span class="absolute bottom-0 text-xs font-thin">Jun 22</span>
			</div>
			
		</div>
		
	</div>
        </div>
    )
}

export default BarGraph;