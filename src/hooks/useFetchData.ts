import { useEffect, useState } from "react";

function useFetchData<Payload>(url: string) : {
    data: Payload | null,
    done: boolean,
} {
    const [data, dataSet] = useState<Payload | null>(null);
    const [done, doneSet] = useState(false);

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then((data: Payload) => {
              dataSet(data);
              doneSet(true);
          })
    }, [url])


    return { data, done };
}

export default useFetchData;