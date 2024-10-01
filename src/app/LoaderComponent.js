import '@/styles/Typography.css';

function Loader()
{
    return(
        <>
         <div className="w-screen h-screen flex justify-center items-center bg-custom-almostblack">
                <div className="loader">
                    <div className="light"></div>
                    <div className="black_overlay"></div>
                </div>
            </div>
        </>
    )
}
export default Loader;