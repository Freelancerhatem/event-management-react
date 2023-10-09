

const FAQ = () => {
    return (
        <div  className="px-12">
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4"  />
                    <div className="collapse-title text-base md:text-xl font-medium">
                    What services does your event management company provide?
                    </div>
                    <div className="collapse-content">
                        <p>Answer: We offer a wide range of event planning and management services, including event design, logistics, vendor coordination, and on-site event support.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-base md:text-xl font-medium">
                    How can I request a quote for my event?
                    </div>
                    <div className="collapse-content">
                        <p>Answer: You can request a quote by filling out the contact form on our website, sending us an email, or giving us a call. We will get back to you with a customized quote promptly.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-base md:text-xl font-medium">
                    Can you handle both small and large-scale events?
                    </div>
                    <div className="collapse-content">
                        <p>Answer: Yes, we have experience in organizing events of all sizes, from intimate gatherings to large-scale conferences and conventions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;