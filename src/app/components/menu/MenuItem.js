export default function MenuItem(){
    return(
        <div className="relative bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
              <img src="/pizza.jpg" className="max-h-auto max-h-24 block mx-auto" alt="pizza"></img>
            </div>
                 <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
                    <p className="text-gray-500 text-sm">
                        Lorem ipsum doro sit amwt consectur adispsion
                    </p>
                    <button className="mt-4 bg-red-600 text-white rounded-full px-8 py-2">
                        Add to cart Rs.899
                    </button>
         </div>

    )
}