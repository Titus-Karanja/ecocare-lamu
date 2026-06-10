const ourNetworks = [
  {
    id: 1,
    name: "name",
    logo: "logo image",
    heading: "Information Heading", 
    information: "information"
  },
  {
    id: 2,
    name: "name",
    logo: "logo image",
    heading: "Information Heading",  
    information: "information"
  },
  {
    id: 3,
    name: "name",
    logo: "logo image", 
    heading: "Information Heading", 
    information: "information"
  },
]

export default function NetworkSection() {
  return <section id="network" className="py-24 px-4 relative">
    <div className="container mx-auto  max-w-5xl min-h-screen">
      <h2 className="text-3xl  md:text-4xl font-bold mb-4 text-center">
        Network <span className="text-primary"> Section</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        a small paragraph title about the Network section 
      </p>
    
    <div className="grid grid-cols-1 gap-[10vh]">
      {ourNetworks.map((network, key) => (
        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover grid grid-cols-3 gap-6 h-[40vh]">
              <div className="bg-primary">
                <h3 className="flex flex-start p-4">{network.name}</h3>
                <img src={network.logo} alt={network.logo} className="p-4 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="bg-card">
                <h3 className="flex flex-start p-4">
                  {network.heading}
                </h3>
                <p className="flex flex-start p-4">
                  {network.information}
                </p>                  
              </div>          
        </div>

      ))}
    </div> 
    </div> 
  </section>
}




 
