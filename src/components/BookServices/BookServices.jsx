import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const BookServices = () => {
    const services = useLoaderData();
    const { title, _id, price, img, } = services;
    const { user } = useContext(AuthContext);

    const handleBookServices = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        // const dueAmount = form.dueAmount.value;
        console.log(name, email, date,);
        const booking = {
            CustomerName: name,
            email,
            img,
            date,
            services: title,
            service_id: _id,
            price: price
        };
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Booking Successful')
                }
                console.log(data)
            })

    }
    return (
        <div className=" mt-12 bg-[#F3F3F3]">
            <h2 className="text-center text-3xl">Book Services: {title}</h2>
            <div className="card-body">
                <form onSubmit={handleBookServices} >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>

                            <input type="date" required name="date" placeholder="Date" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input name="email" defaultValue={user?.email} type="email" placeholder="Your Email" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>

                            <input type="text" name="dueAmount" placeholder="Due Amount" defaultValue={'$' + price} className="input input-bordered" />
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>

            </div>

        </div>
    );
};

export default BookServices;