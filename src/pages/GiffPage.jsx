import { useEffect } from "react";
import useFetch from "../customHook/useFetch"

import GiffLayout from "../components/GifLayout";

const GiphPage = ({text}) => {
    const { get, data, loading } = useFetch()

    useEffect(() => {
        if(!text) {
            get('https://api.giphy.com/v1/gifs/trending')
            return
        }

        //for waiting to user finish writing and dont make a lot of request
        setTimeout(() => {
            get('https://api.giphy.com/v1/gifs/search', {q: text})
        }, 500)
    }, [text]);

    return(
        <div>
            

            {loading && <p>Getting latest gifs</p>}
            {data && 
                <GiffLayout elements={data} />
            }
        </div>
    )
}

export default GiphPage