import { useState } from "react";
import axios from "axios";

const useFetch = () => {
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState([]);

    const get = async(url, options={}) => {
        setLoading(true);
        try {
            const { data } = await axios.get(url, {
                params: {
                    api_key: 'jTAuqirruj85Vtd9DISWXopoSqNOHRUG',
                    ...options
                }
            });

            setData(data.data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    return { get, data, loading }
}

export default useFetch;