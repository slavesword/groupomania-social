import contentImage from "../../assets/960x0.webp";

function Center() {
    return (
    <section className="center">

            <div className="left-separator"></div>

            <div className="content-card">
                <div className="top-section"></div>
                <div className="middle-section">
                    <img src= {contentImage} alt="content" />
                </div>
                <div className="bottom-section"></div>
            </div>

            <div className="right-separator"></div>

        </section>
    )
}

export default Center;

