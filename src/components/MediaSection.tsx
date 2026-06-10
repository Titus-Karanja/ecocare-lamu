const newsitems = [
  {
    id: 1,
    image: "news Article Image",
    heading: "news article heading",
    body: "news Article body",
  }
]
const eventsItems = [
  {
    id: 1,
    title: "Event Title",
    date: "Event Date", 
    description: "Event Information",
    image: "eVents Image"
  }
]

const blogItems = [
  {
    id: 1,
    title: "blog Title",
    body: "blog body",
    image: "blog Image",
  },
  {
    id: 2,
    title: "blog Title",
    body: "blog body",
    image: "blog Image",
  },
  {
    id: 3,
    title: "blog Title",
    body: "blog body",
    image: "blog Image",
  },
  {
    id: 4,
    title: "blog Title",
    body: "blog body",
    image: "blog Image",
  },
  {
    id: 5,
    title: "blog Title",
    body: "blog body",
    image: "blog Image",
  },
  {
    id: 6,
    title: "blog Title",
    body: "blog body",
    image: "blog Image",
  },
  {
    id: 7,
    title: "blog Title",
    body: "blog body",
    image: "blog Image",
  },
]
const dailyFunFact = "today's fun fact "


export default function MediaSection() {
  return <section id="media" className="relative min-h-screen py-24 px-4 bg-border/20">
    <div className="container mx-auto ">
      <h2 className="text-3xl  md:text-4xl font-bold mb-4 text-center">
        Media <span className="text-primary"> Center</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">a small paragraph title about the media section </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10vw] mb-10">
        <div className="relative">
          <h3 className="text-bold mb-4">News Articles</h3>
          {newsitems.map((news, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-[60vh] overflow-hidden">
                <h2 className="flex flex-start p-4">{news.heading}</h2>
                <img src={news.image} alt={news.image} className="p-4 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 h-55  bg-black text-card">
                <div className="text-left">
                  <p className="mb-4">
                    {news.body}
                  </p>
                  <a className="absolute bottom-4 right-2 button hover:scale-110">
                    Read More
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>
        <div className="relative">
          <h3 className="text-bold mb-4">Events</h3>
          {eventsItems.map((event, key) => (
            <div key={key} className=" group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-[60vh] overflow-hidden">
                <h2 className="flex flex-start p-4 mb-4">{event.title}</h2>
                <h2 className="flex flex-start p-4">{event.date}</h2>
                <img src={event.image} alt={event.image} className="p-4 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 h-55 flex flex-start bg-black text-card">
                <div className="text-left">
                  <p className="mb-4">
                    {event.date}
                  </p>
                  <p className="mb-4">
                    {event.description}
                  </p>
                </div>
                  <a className="button absolute bottom-4 right-2 hover:scale-110">
                    Read More
                  </a>
              </div>

            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="mb-6">
          <h2>Blogs</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2vw] mb-10">
          {blogItems.map((blog, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-30 overflow-hidden">
                <img src={blog.image} alt={blog.image} className="p-4 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative p-2 flex items-end bg-black text-card">
                <div className="mb-2">
                  <h3 className="mb-2 text-left">{blog.title}</h3>
                  <p className="mb-2 text-left">
                    {blog.body}
                  </p>

                </div>
                <div className="">
                  <a className="button absolute bottom-2 right-2 hover:scale-110  ">
                    Read More
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
    
  </section>
}