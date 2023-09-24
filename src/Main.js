function Main() {

  let websiteName = "Node.js";

  let operatingSystems = ["Windows","MacOS","Linux"]

  let versions = [18.18, 20.18]

  function greet(){
    return "® is an open-source, cross-platform JavaScript runtime environment"
  }

  // const mainStyles = {
  //   backgroundColor:'pink',
  //   border: '5px solid green',
  //   color:'blue'
  // }
//  background-color 
//backgroundColor
  return (
    // <main style={mainStyles}>
    <main>
      <h3>
       {websiteName} {greet()}
      </h3>

      <h1 className="text-7xl text-blue-600 underline border-t-2 border-rose-600	shadow-xl	 ">Download for {operatingSystems[1]}</h1>

      <div>
        <button>
          {versions[0]} LTS <br /> <span> {versions[0] <= 20.18 ? "Latest": "Current" }</span>
        </button>

        <button>
        {versions[1]} LTS <br /><span> {versions[1] <= 20.18 ? "Current": "Latest" }</span>
        </button>
      </div>

      <h4>For information about supported releases, see the release schedule.</h4>
    </main>
  );
}

export default Main;
