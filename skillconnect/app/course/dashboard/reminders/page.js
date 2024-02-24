const page = () => {
  return (
    <>
      <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6"><div>
      <div className="p-10 space-y-4">
      <h1 >Calendar events</h1>

          <h1>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</h1>
          <p className="text-xs">Requires Google Calendar, Apple Calendar, or Outlook</p>

      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
  Schedule Learning Time
  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0  0  24  24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke="currentColor"/><polyline points="12  6  12  12  16  14"/></svg>
</button>  
        
      </div>
      
      </div>
      <div>
      <div className="p-10 space-y-4">
      <h1 >Push notifications</h1>

      <h1>Don’t want to schedule time blocks? Set a learning reminder to get push notifications from the Skillconnect mobile app & Email notifications</h1>

      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
  Schedule Notifications
  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0  0  24  24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" stroke="currentColor"/><polyline points="12  6  12  12  16  14"/></svg>
</button>  
        
      </div>
      
    </div></div>
          </div>
        </main>
    
    </>
  )
}

export default page


