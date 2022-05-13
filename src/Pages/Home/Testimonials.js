import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            reviews: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, impedit. Earum quas incidunt unde enim accusantium. Nulla possimus inventore voluptate.',
            location:'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            reviews: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, impedit. Earum quas incidunt unde enim accusantium. Nulla possimus inventore voluptate.',
            location:'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            reviews: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, impedit. Earum quas incidunt unde enim accusantium. Nulla possimus inventore voluptate.',
            location:'California',
            img: people3
        },
    ]
    return (
        <section className='my-28'>
            <div>
                <div className='justify-between hero-content flex-col lg:flex-row'>
                    <div>
                        <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                        <h4 className='text-3xl'>What Our Patients Says</h4>
                    </div>
                    <div className='w-24 lg:w-48'>
                        <img src={quote} alt="" />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;