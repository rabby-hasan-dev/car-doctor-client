import { FaArrowRight, FaBeer } from 'react-icons/fa';


const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    console.log(service);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className='text-[#FF3811]'>Price:$ {price}</p>

                <div className="card-actions flex justify-end">

                    <button > <FaArrowRight className='text-[#FF3811]' ></FaArrowRight>  </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;