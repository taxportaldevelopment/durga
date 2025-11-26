
const Footer = () => {

   const getdate = new Date();

  return (
    <div>
        {/* split the three columns with grid ssystem */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-900 text-white p-10 lg:px-28'>
            <div>
                <h1 className='text-2xl font-bold antonio mb-4'>About Us</h1>
                <p className='text-gray-400'>We are a leading company in providing top-notch services and solutions to our clients. Our mission is to deliver excellence and innovation in every project we undertake.</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold antonio mb-4'>Contact Us</h1> 
                <p className='text-gray-400'>123 Main Street, City, Country</p>
                <p className='text-gray-400'>Email: info@example.com</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold antonio mb-4'>Contact Us</h1>
                <p className='text-gray-400'>123 Main Street, City, Country</p>
                <p className='text-gray-400'>Email: info@example.com</p>
            </div>
        </div>
        <div className='bg-gray-800 text-center text-gray-400 p-4'>
            <p>&copy; {getdate.getFullYear()} Your Company. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer