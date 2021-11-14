import {Header} from "./header";

const Page404 = (props) => {
    return (
        <>
            <Header/>
            <div className={'container mx-auto text-center pt-64'}>
                <span className={'text-9xl font-sans font-extrabold text-red-600'}>404</span>
                <span className={'font-star-wars text-4xl'}>This planet not exists!</span>
            </div>
        </>
    );
};

export default Page404;
