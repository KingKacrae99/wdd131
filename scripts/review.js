function setReviewCount(){
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
}
function getReviewCount(){
    const counter= document.getElementById('review-count');
    if(counter){
        const reviewCount= localStorage.getItem("reviewCount");
        counter.innerHTML= reviewCount ? reviewCount : 0;
        }
}
setReviewCount();
getReviewCount();
