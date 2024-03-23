import { Link,Image, } from "@chakra-ui/react";
import { Blog } from "@/lib/features/CardTeams/blog";


const CardTeams = ({blog}:{blog:Blog})=>{
    const { title, image, paragraph, author, tags, publishDate } = blog;
    return(
        <>
       <div className="wow fadeInUp relative overflow-hidden mx-auto rounded-md bg-white shadow-one dark:bg-blue-950" data-wow-delay=".1s">
  <Link href="/" className="relative block">
    <span className="absolute top-3 right-3 z-20 inline-flex items-center justify-center rounded-full bg-blue-300 py-1 px-2 text-xs font-semibold capitalize text-white">
      {tags[0]}
    </span>
    <Image src={image} alt="image" className="object-cover object-center h-48 lg:h-64 w-full" />
  </Link>
  <div className="p-6">
    <h3>
      <Link href="/" className="mb-4 block text-xl font-bold text-black hover:text-blue-600 dark:text-white dark:hover:text-primary sm:text-2xl">
        {title}
      </Link>
    </h3>
    <p className="mb-4 text-base font-medium text-gray-700 dark:text-white">
      {paragraph}
    </p>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src={image} alt="author" className="object-cover object-center h-full w-full" />
          </div>
        </div>
        <div>
          <h4 className="mb-1 text-sm font-medium text-gray-900 dark:text-white">{author.name}</h4>
          <p className="text-xs text-gray-500">{author.designation}</p>
        </div>
      </div>
      <div className="inline-block">
        <h4 className="mb-1 text-sm font-medium text-gray-900 dark:text-white">Date</h4>
        <p className="text-xs text-gray-500">{publishDate}</p>
      </div>
    </div>
  </div>
</div>
        
        </>
    )
}

export default CardTeams;