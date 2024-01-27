export async function generateStaticParams() {
  const res = await fetch('https://dxdpmgjttftkiqtlgcng.supabase.co/rest/v1/courses?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY', { cache: 'no-store' })
  const data = await res.json()
 
  return data.map((course) => ({
    id: data.id,
  }))
}

async function getData(id) {
  const resCourse = await fetch(`https://dxdpmgjttftkiqtlgcng.supabase.co/rest/v1/courses?id=eq.${id}&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY`, { cache: 'no-store' })
  const courseData = await resCourse.json()
  
  const resInstructor = await fetch(`https://dxdpmgjttftkiqtlgcng.supabase.co/rest/v1/instructors?id=eq.${courseData[0].instructor}&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY`, { cache: 'no-store' });
  const instructorData = await resInstructor.json();

  const data = [
    {
      ...courseData[0],
      instructor: instructorData[0]
    }
  ];

  return data
}
  
export default async function Page({ params }) {
  const landingcourse = await getData(params.id)
  
  console.log({landingcourse});
  
  return (<div>
          {landingcourse.map((item) =>  (
             <div key={item.id}>

             <h3>Title : {item.title}</h3>
             <p>Main Author id : {item.instructor.id}</p>
             <p>Main Author : {item.instructor.instructorname}</p>
             <p>Main Author Description : {item.instructor.instructordescription}</p>
             <h3>Price : {item.price}</h3>
             <p>Description : {item.description}</p>
             <p>Small Description : {item.small_description}</p>
             <p>Learning : {item.what_you_learn}</p>
             <p>requirements : {item.requirements}</p>
             <p>language : {item.language}</p>
             <p>thumbnail : {item.imageUrl}</p>
             <p>category : {item.category}</p>
             <p>difficulty : {item.difficulty}</p>
             <div>Course updated date: {item.updateddate}</div>
             <div>ID Number: {item.id}</div>
            
            <br/>

          </div>
  ))}</div>
)}