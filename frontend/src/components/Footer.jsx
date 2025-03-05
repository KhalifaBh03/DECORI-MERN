import logo from '../assets/logo.png'
function Footer(){
    return(
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <img src={logo} className='mb-5 w-32' alt='logo_image'/>
                    <p className='w-full md:w-2/3 text-gray-600'>
                    Décori offers high-quality, stylish furniture to make your home feel comfortable and elegant. Explore our wide range of products to suit your needs and style. Your perfect home starts with Décori!
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+216-99-999-999</li>
                        <li>contact@decori.com</li>

                    </ul>
                </div>

            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ Décori.com - All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer