import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center bg-[url("https://i.ibb.co/BTFgwMt/appointment.png")]'>
            <div className='flex-1'>
                <img className='mt-[-130px] hidden lg:block' src="https://i.ibb.co/R7WZ4DT/doctor.png" alt="" />
            </div>
            <div className='flex-1  text-left  mr-10'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an appointment Today</h2>
                <p className='text-white mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;