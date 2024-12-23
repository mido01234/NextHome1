import "../globals.css"
export default function Form() {
    return (
        <>
            <h3 className="text-center Jomhuria-regular text-8xl text-purple-600">CONTACT US</h3>
            <div className="flex justify-center items-center min-h-screen mt-10">
                <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl border">
                    <h1 className="poppins-semibold text-4xl text-center text-black mb-4">
                        Contact Us Form
                    </h1>
                    <p className="poppins-regular text-center  text-black mb-6 text-lg">Enter Your Data Below</p>
                    <div className="mb-4">
                        <label className="poppins-medium block text-black text-xl mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="poppins-medium text-xl shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block poppins-medium text-black text-xl mb-1" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            id="phone"
                            type="text"
                            placeholder="Phone Number"
                            className="shadow poppins-medium text-xl appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block poppins-medium text-black text-xl font-bold mb-1" htmlFor="restaurant">
                            Restaurant
                        </label>
                        <input
                            id="restaurant"
                            type="text"
                            placeholder="Restaurant Name"
                            className="shadow poppins-medium text-xl appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block poppins-medium text-black text-xl mb-1" htmlFor="address">
                            Address Link
                        </label>
                        <input
                            id="address"
                            type="text"
                            placeholder="Address (Google Map)"
                            className="shadow poppins-medium text-xl appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block poppins-medium text-black text-xl mb-1" htmlFor="socialMedia">
                            Social Media
                        </label>
                        <input
                            id="socialMedia"
                            type="text"
                            placeholder="Social Media Link"
                            className="shadow poppins-medium text-xl appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block poppins-medium text-black text-xl mb-1" htmlFor="details">
                            Details
                        </label>
                        <textarea
                            id="details"
                            placeholder="Write Details"
                            className="shadow poppins-medium text-xl appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="poppins-medium text-xl bg-purple-600 hover:bg-purple-700 text-white  py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                        >
                            Send Now
                        </button>
                    </div>
                </form>
            </div>

        </>
    );
}
