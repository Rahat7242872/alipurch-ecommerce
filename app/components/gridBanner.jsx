
export default function GridBaner({}) {



    return (
        <section className="text-center ">
           <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 p-2">
              <div className="bg-amber-50 h-40 rounded-3xl  ">
                 <h1>Electronic</h1>
              </div>
              <div className="bg-blue-50 h-40 rounded-3xl">
                 <h1>Clothing</h1>
              </div>
            
             </div>
        </section>
    );
  }