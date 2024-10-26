

const footer = () => {
    return (
        <div className="bg-black text-white w-full">
            <div className=" p-20 w-11/12 mx-auto" >
               
                    <img className="mx-auto" src="../../public/assets/logo-footer.png" alt="" />
                    <div className="flex justify-between mt-10">
                        <div>
                            <h1>About Us</h1>
                            <p>We are a passionate team <br /> dedicated to providing the bestbr
                            <br /> services to our customers.</p>
                        </div>
                        <div>
                            <p>Quick Links</p>
                            <ul className="text-gray-200">
                                <li>. home</li>
                                <li>. services</li>
                                <li>. About</li>
                                <li>. Contact</li>
                            </ul>
                        </div>
                        <div>
                            <p>Subscribe</p>
                            <p>Subscribe to our newsletter for <br /> the latest updates.</p>
                        </div>
                    </div>
                

            </div>
            
 

        </div>
    );
};

export default footer;