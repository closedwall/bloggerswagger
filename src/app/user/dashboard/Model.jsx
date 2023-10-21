
const Model = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-700 bg-opacity-50">
        <div className="absolute inset-0 opacity-100 flex justify-center items-center ">
        <div className="bg-white rounded-lg p-4 w-3/4">
          <div className="text-center font-semibold text-xl">New Blog Post</div>
          <div className="p-4">
            <div>
                <div className="flex flex-col space-y-3 my-3">
                    <label htmlFor="title" className="font-bold">Title</label>
                    <input className="border-2 border-black rounded h-10 pl-2" type="text" />
                </div>
                <div className="flex flex-col space-y-3 my-3">
                    <label htmlFor="auther" className="font-bold">Auther</label>
                    <input className="border-2 border-black rounded h-10 pl-2" type="text" />
                </div>
                <div className="flex flex-col space-y-3 my-3">
                <label htmlFor="content" className="font-bold">Content</label>
                <textarea rows={7} className="border-2 border-black rounded pl-2"/>
                </div>
                <div className="flex flex-col">
                    <button className="bg-blue-400 h-10">Submit</button>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    )
  }
  export default Model;