import React from 'react'

const page = () => {
  return (

<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

  <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">We are building something <span class="text-blue-600">Awesome</span></h1>
      <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">this page is being constructed in background</p>

      <div class="mt-7 grid gap-3 w-full sm:inline-flex">
        <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Get started
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
        <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Contact sales team
        </a>
      </div>
 


      <div class="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">

        


        

          <div class="mt-5">
 
            <svg class="h-auto w-16 text-gray-800 dark:text-white" width="110" height="28" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M66.6601 8.35107C64.8995 8.35107 63.5167 8.72875 62.1331 9.48265C62.1331 5.4582 62.1331 1.81143 62.2594 0.554199L53.8321 2.06273V2.81736L54.7124 2.94301C55.8433 3.19431 56.2224 3.82257 56.4715 5.33255C56.725 8.35107 56.5979 24.4496 56.4715 27.0912C58.7354 27.5945 61.1257 27.9722 63.5159 27.9722C70.1819 27.9722 74.2064 23.8213 74.2064 17.281C74.2064 12.1249 70.9366 8.35107 66.6601 8.35107ZM63.7672 26.5878C63.2639 26.5878 62.6342 26.5878 62.258 26.4629C62.1316 24.7023 62.0067 17.281 62.1316 10.7413C62.8862 10.4893 63.3888 10.3637 64.0185 10.3637C66.7872 10.3637 68.2965 13.6335 68.2965 17.6572C68.2957 22.6898 66.4088 26.5878 63.7672 26.5878ZM22.1363 1.0568H0V2.18838L1.25796 2.31403C2.89214 2.56533 3.52184 3.57127 3.77242 5.9608C4.15082 10.4886 4.02445 18.6646 3.77242 22.5619C3.52112 24.9522 2.89287 26.0845 1.25796 26.2087L0 26.4615V27.4674H14.2123V26.4615L12.703 26.2087C11.0681 26.0838 10.4392 24.9522 10.1879 22.5619C10.0615 20.9263 9.93583 18.2847 9.93583 15.0156L12.9543 15.1413C14.8413 15.1413 15.7208 16.6505 16.0985 18.7881H17.2308V9.86106H16.0985C15.7201 11.9993 14.8413 13.5078 12.9543 13.5078L9.93655 13.6342C9.93655 9.35773 10.0622 5.33328 10.1886 2.94374H14.59C17.9869 2.94374 19.7475 5.08125 21.0047 8.85513L22.2626 8.47745L22.1363 1.0568Z" fill="currentColor"/>
              <path d="M29.3053 8.09998C35.5944 8.09998 38.7385 12.3764 38.7385 18.0358C38.7385 23.4439 35.2167 27.9731 28.9276 27.9731C22.6393 27.9731 19.4951 23.6959 19.4951 18.0358C19.4951 12.6277 23.0162 8.09998 29.3053 8.09998ZM28.9276 9.35793C26.1604 9.35793 25.4058 13.1311 25.4058 18.0358C25.4058 22.8149 26.6637 26.7137 29.1796 26.7137C32.0703 26.7137 32.8264 22.9405 32.8264 18.0358C32.8264 13.2567 31.5699 9.35793 28.9276 9.35793ZM75.8403 18.1622C75.8403 13.0054 79.1101 8.09998 85.5248 8.09998C90.8057 8.09998 93.3224 11.9995 93.3224 17.1555H81.6253C81.4989 21.8089 83.7628 25.2051 88.2913 25.2051C90.3038 25.2051 91.3098 24.7033 92.5685 23.8223L93.0703 24.4505C91.8124 26.2111 89.0459 27.9731 85.5248 27.9731C79.8647 27.9724 75.8403 23.9479 75.8403 18.1622ZM81.6253 15.7726L87.5366 15.6463C87.5366 13.1311 87.159 9.35793 85.0214 9.35793C82.8839 9.35793 81.7502 12.8791 81.6253 15.7726ZM108.291 9.10663C106.782 8.47693 104.77 8.09998 102.506 8.09998C97.8538 8.09998 94.9594 10.8665 94.9594 14.137C94.9594 17.4075 97.0955 18.7904 100.118 19.7971C103.261 20.9279 104.142 21.8089 104.142 23.3182C104.142 24.8275 103.01 26.2103 100.997 26.2103C98.6084 26.2103 96.8464 24.8275 95.4635 21.0536L94.5825 21.3063L94.7089 26.84C96.2181 27.4683 98.9846 27.9724 101.375 27.9724C106.28 27.9724 109.425 25.4557 109.425 21.5576C109.425 18.9161 108.041 17.4075 104.771 16.1489C101.249 14.766 99.992 13.8857 99.992 12.2501C99.992 10.6152 101.126 9.48286 102.635 9.48286C104.897 9.48286 106.407 10.8665 107.54 14.2627L108.42 14.0114L108.291 9.10663ZM55.0883 8.6033C52.9508 7.3468 49.1769 7.97433 47.1651 12.5028L47.29 8.1007L38.8642 9.73561V10.4902L39.7444 10.6159C40.8775 10.7423 41.3794 11.3705 41.5057 13.0062C41.757 16.0247 41.6314 21.3078 41.5057 23.9486C41.3794 25.4564 40.8775 26.2111 39.7444 26.3374L38.8642 26.4638V27.4697H50.5606V26.4638L49.0513 26.3374C47.7941 26.2111 47.4164 25.4564 47.29 23.9486C47.0387 21.5584 47.0387 16.7793 47.1651 13.7608C47.7933 12.8798 50.5606 12.1259 53.0757 13.7608L55.0883 8.6033Z" fill="currentColor"/>
            </svg>
     
          </div>

      </div>

    </div>


    <div class="relative ms-4">
      <img class="w-full rounded-md" src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80" alt="Image Description"></img>
      <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>


      <div class="absolute bottom-0 start-0">
        <svg class="w-2/3 ms-auto h-auto text-white dark:text-slate-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
          <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
          <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
          <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
          <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
          <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
          <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
          <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
          <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
          <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="64" fill="currentColor"/>
          <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
          <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
          <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
        </svg>
      </div>

    </div>

  </div>

</div>

 )
}

export default page