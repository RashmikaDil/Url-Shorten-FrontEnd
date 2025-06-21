const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
        <div className="mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Rashmika Dilhara.  All rights reserved.</p>
            <p>
            Follow me on{' '}
            <a href="https://x.com/RashmikaDil2023" className="text-blue-400 hover:underline">
                X 
            </a>{' '}
            and{' '}
            <a href="https://www.linkedin.com/in/rashmika-dilhara-47a7102aa/ " className="text-blue-400 hover:underline">
                LinkedIn
            </a>.
            </p>
        </div>
        </footer>
    );
}

export default Footer;