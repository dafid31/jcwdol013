import blogData from "@/lib/features/CardTeams/blogData"
import CardTeams from "./components/CardTeam"
import Title from "@/components/Title"
export default function OurTeams(){
    return (
        <>
       
       <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <Title
          title="Our Team Company"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <CardTeams blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>

        </>
    )
}