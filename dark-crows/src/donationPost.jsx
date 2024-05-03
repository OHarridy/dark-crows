const donationPost = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.amount}</p>
        </div>
    );
}
export default donationPost;