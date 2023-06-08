import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import BookingTable from "./BookingTable";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])


    const handleDelete = (id) => {
        const proceed = confirm('Are you sure Delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Service delete successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })

        }
    }

    return (
        <div className="mt-12">

            <h2 className="text-3xl text-center mb-4">Your Bookings:{bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>

                            <th>
                                Picture
                            </th>
                            <th>
                                Customer Name;
                            </th>
                            <th>Service</th>
                            <th>Due Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, index) => <BookingTable
                                key={index + 1}
                                booking={booking}
                                handleDelete={handleDelete}

                            ></BookingTable>)
                        }


                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default Bookings;