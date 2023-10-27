

export default function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <img class = "rating"src={props.star} alt="delivery Icon"></img>
            <img class= "profilepic"src={props.image} alt="Special Menu"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}