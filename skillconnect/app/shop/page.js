import Link from "next/link"

async function getData() {
  const res = await fetch('https://dxdpmgjttftkiqtlgcng.supabase.co/rest/v1/courses?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY', { cache: 'no-store' })
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main>
        {data.map((item) =>  (
            <div key={item.id}>
                <Link href={`/course/${item.id}`}><h3>Title : {item.title}</h3></Link>
                <p>Author Name : {item.author}</p>
                <h3>Price : {item.price}</h3>
                <p>Duration : {item.duration}</p>
                <p>Description : {item.description}</p>
                <p>difficulty : {item.difficulty}</p>
                <br/>
            </div>
        ))}
  </main>
}



