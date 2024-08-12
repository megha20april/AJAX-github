import React, { useEffect, useState } from 'react'

export default function useGitAPI(username) {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    const requestURL = `https://api.github.com/users/${username}`

    xhr.open('GET' , requestURL, true);
    xhr.onload = function(){
        const responseData = JSON.parse(this.responseText)
        setData(responseData)
    }
    xhr.send()
  },[username])

    return data;
}
