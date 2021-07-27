import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Item from './Item';

const List = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getFetchData = async() => {
            await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10`)
                .then((res) => {
                    let response = res.data;
                    setArticles(response);
                }).catch(error => {
                    return console.log(error);
                })
        }
        getFetchData();
    },[]);
    
    return(
        <div>
            {articles.map(article => (
                <Item key={article.id} article={article}/>
            ))}
        </div>
    );
};

export default List;