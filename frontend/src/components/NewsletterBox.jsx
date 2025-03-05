import bgImage from '../assets/5.jpg';

function NewsletterBox() {


    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <div className="w-full flex items-center justify-center bg-center bg-cover bg-no-repeat py-16 px-4" style={{ backgroundImage: `url(${bgImage})`}}>
            <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-lg text-center max-w-lg mx-4 shadow-lg">
                <p className="text-2xl font-medium text-gray-800">Subscribe Now & Get 20% OFF !</p>
                <p className="text-gray-500 mt-3">
                Stay updated with our latest furniture collections & exclusive offers.
                </p>
                <form onSubmit={onSubmitHandler} className="w-full flex items-center gap-3 mx-auto my-6 border pl-3 bg-white rounded-lg">
                    <input className="w-full outline-none py-2 px-3 bg-transparent" type="email" placeholder="Please Enter your Email" required/>
                    <button type="submit" className="bg-black text-white text-xs px-6 py-3 rounded-r-lg">SUBSCRIBE</button>
                </form>
            </div>
        </div>
    );
}

export default NewsletterBox;


