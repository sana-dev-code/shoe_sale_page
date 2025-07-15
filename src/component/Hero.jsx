const HeroSection = () => {
    return(
        <main className="hero">
            <div className="left">
                <h1>YOUR FFET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shope Now</button>
                    <button className="trans">Category</button>
                </div>
                    <p style={{ marginTop: "40px" }}>Also Available On</p>
                <div className="hero-image">
                    <img src="/image/amazon.png" alt="amazon logo" />
                    <img src="/image/flipkart.png" alt="hero logo" />
                </div>
            </div>
            <div className="right"><img src="/image/shoe_image.png" alt="Shoe logo" /></div>
        </main>

    )
};
export default HeroSection