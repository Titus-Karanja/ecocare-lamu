const teamMembers = [
  {
    id: 1,
    photo: "photo",
    name: "name ",
    title: "title",
  },
  {
    id: 2,
    photo: "photo",
    name: "name ",
    title: "title",
  },
  {
    id: 3,
    photo: "photo",
    name: "name ",
    title: "title",
  },
  {
    id: 4,
    photo: "photo",
    name: "name ",
    title: "title",
  },
  {
    id: 5,
    photo: "photo",
    name: "name ",
    title: "title",
  },
  {
    id: 6,
    photo: "photo",
    name: "name ",
    title: "title",
  },
  {
    id: 7,
    photo: "photo",
    name: "name ",
    title: "title",
  },
  {
    id: 8,
    photo: "photo",
    name: "name ",
    title: "title",
  },
  {
    id: 9,
    photo: "photo",
    name: "name ",
    title: "title",
  },
  {
    id: 10,
    photo: "photo",
    name: "name ",
    title: "title",
  }
]
export default function AboutSection() {
  return <section id="about" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Us</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-[10vw] mb-10">
      <div className="h-[120vh] group bg-card/30 rounded-lg overflow-hidden shadow-xs card-hover">
        <h3 className="text-bold mb-4 p-6">
          Who We Are
        </h3>
        <div className=" overflow-hidden">
          <h2 className="p-4">Organization</h2>
        </div>
        <div>
          <p className="mb-4">
            Body
          </p>
        </div>
      </div>
      <div className="h-[120vh] group bg-card/30 rounded-lg overflow-hidden shadow-xs card-hover">
        <h3 className="text-bold mb-4 p-6">
          What We do
        </h3>
        <div className="overflow-hidden">
          <h2 className="p-4">Organization</h2>
        </div>
        <div>
          <p className="mb-4">
            Body
          </p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="mb-6">
        <h2>Team Members</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2vw] mb-10">
        {teamMembers.map((member, key) => (
          <div key={key} className="group bg-white overflow-hidden shadow-xs card-hover">
            <div className="h-30 overflow-hidden rounded-full">
              <img src={member.photo} alt={member.photo} className="p-4 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 " />
            </div>
            <div className=" p-2 flex items-end bg-card text-">
              <div className="mb-2">
                <h3 className="mb-2 text-left">{member.name}</h3>
                <h3 className="mb-2 text-left">
                  {member.title}
                </h3>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>


  </section>
}