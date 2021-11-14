const FeaturedBox = ({title, children}) => {
    return (
        <section className={'bg-gray-800 my-24 w-full py-16'}>
            <div className={'container mx-auto'}>
                <h2>{title}</h2>
                <div className='flex flex-wrap gap-8 relative'>
                    {children}
                </div>
            </div>
        </section>
    )
};

export default FeaturedBox;
