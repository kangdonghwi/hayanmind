import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';

const List = () => {
    const [contents, setContents] = useState([]);
    const [item,setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMoreData = async() => {
        setLoading(true);
        setContents(contents.concat(item.slice(0,10)));
        setItem(item.slice(10));
        setLoading(false);
    }

    const getFetchData = async() => {
        setLoading(true);
        await axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then((res) => {
                let response = res.data;
                setContents(response.slice(0,10));
                response = response.slice(10);
                setItem(response);
                setLoading(false);
            }).catch(error => {
                return console.log(error);
            })
    }

    const onScroll = useCallback((e) => {
        const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
        if (scrollTop + clientHeight === scrollHeight) {
            fetchMoreData();
        }
    },[loading]);

    useEffect(() => {
        getFetchData();
    },[]);
    
    useEffect(() => {
        window.addEventListener("scroll",onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
          };
    },[onScroll]);

    if(loading){
        return <p>대기중</p>
    }
  
    return(
        <div>
            {contents.map(content => (
                <Item key={content.id} content={content}/>
            ))}
        </div>
    );
};

export default List;