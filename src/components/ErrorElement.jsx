import { Link, useRouteError } from "react-router-dom";


const ErrorElement = () => {

    const error = useRouteError();//catch the error

    //console.error(error);//check the error

    return (
        <div className='text-center text-4xl font-bold mt-24'>
            {/* <h1> Ops! </h1> */}
            <h1>{error.status} {error.statusText} !</h1>
            <Link to="/"><button className="text-base border bg-red-200 hover:border-red-600 rounded-md px-5 py-2">Go to home</button></Link>
        </div>
    );
};

export default ErrorElement;