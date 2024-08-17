import newsImage from "../assets/coffee-paper-typewriter-table.jpg";

function Rightbar() {

    return (
    <section className="right">
            
            <div className="company-news">
                <h1>Company News</h1>
                <img src= {newsImage} alt="Company News" />
                <p>To transform your employees from apathetic employee newsletter deleters to engaged readers, consider what kind of content they really want.

                    Your internal newsletter can’t all be corporate announcements. Like any great piece of content, there has to be variety to capture — and keep — your readers’ attention.
                    
                    The most engaging internal newsletters feature a mix of employee-focused content, organization-focused content, and customer-focused content.
                    
                    Want to strike that balance? Well, we’ve got 39 innovative company newsletter ideas that will help you grab employees’ attention and keep them coming back for more.</p>
            </div>

        </section>
    )
}

export default Rightbar;