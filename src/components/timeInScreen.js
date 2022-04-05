const DisplayTime = () => {
    const gatherDate = new Date;
    const secs = gatherDate.toLocaleTimeString();
    return `⏰ ${secs}`;


}




export default DisplayTime;