import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
import Jackson from '../../../assets/jackson.jpg';
import Janice from '../../../assets/janicesanders.jpg';
import Mark from '../../../assets/markkennedy.jpg';
import Vicky from '../../../assets/vicky.jpg';
import Four from '../../../assets/fourstars.png';
import Five from '../../../assets/fivestars.png';
import Half from '../../../assets/fourstars.png';


export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
            
                <TestimonialCard star={Four} image={Jackson} name="Jackson" description="The food was just perfect, which matched the friendly and attentive service we were given."/>
                <TestimonialCard  star={Five} image={Janice} name="Janice Sanders" description="Excellent location, this small place is carefully decorated, menu is amazing and not pricey, food was great and the attention even better."/>
                <TestimonialCard star={Half} image={Mark} name="Mark kennedy" description="One of the best Mediterranean restaurants I’ve ever been.Great food, great ambience and better service!"/>
                <TestimonialCard star={Five} image={Vicky} name="Vickie Gregory" description="Excellent service and the food and drinks were delicious! I highly recommend!"/>
                
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}