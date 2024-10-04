function likes(a){
    if(a.length===1){
        console.log(`your post is liked by ${a[0]}`)
    }
    else if(a.length===2){
        console.log(`your post is liked by ${a[0]} and ${a[1]}`)

    }
    else if(a.length>2){
        console.log(`your post is liked by ${a[0]} , ${a[1]} and others`)

    }
}

likes(a=["charles","Olivera"])
likes(a=["charles","Olivera","dc","khabib"])

