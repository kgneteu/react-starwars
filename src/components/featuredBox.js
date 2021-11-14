const FeaturedBox = ({title, children}) => {
    return (
        <>
        <h2>{title}</h2>
        <section className={'bg-gray-800 my-24 w-full py-16'}>
            <div className={'container mx-auto'}>

                <div className='flex gap-8 justify-center'>
                    {children}
                </div>
                <button>More...</button>
            </div>
        </section>
        </>
    )
};

export default FeaturedBox;
