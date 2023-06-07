import { useLoaderData } from "react-router-dom";


const BookServices = () => {
    const services = useLoaderData();
    const { title, _id, price } = services;

    const handleBookServices = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;

    }
    return (
        <div className=" mt-12 bg-[#F3F3F3]">
            <h2 className="text-center text-3xl">Book Services: {title}</h2>
            <div className="card-body">
                <form >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>

                            <input type="date" name="date" placeholder="Date" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input name="email" type="email" placeholder="Your Email" className="input input-bordered" />

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