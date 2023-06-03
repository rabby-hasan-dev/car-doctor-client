import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const services = useLoaderData();
    console.log(services);
    return (

        <div className=" mt-12 bg-[#F3F3F3]">

            <div className="card-body">
                <form >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="form-control">
                           
                            <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                           
                            <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            
                            <input type="text" name="phoneNumber" placeholder="Your Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                           
                            <input name="email" type="email" placeholder="Your Email" className="input input-bordered" />
                            
                        </div>

                    </div>
                    <div className="form-control mt-4">
                           
                          <textarea name="text" id="" className="p-4 rounded-lg" placeholder="Your Message" cols="20" rows="10"></textarea>
                           <label className="label">
                               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                           </label>
                       </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>

            </div>

        </div>

    );
};

export default CheckOut;