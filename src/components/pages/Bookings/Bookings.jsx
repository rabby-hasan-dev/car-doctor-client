import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import BookingTable from "./BookingTable";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `https://car-doctor-server-dusky-five.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {

                    setBookings(data)
                }
                else {
                    // do: logout then navigate
                    navigate('/')
                }

            });
    }, [url])


    const handleDelete = (id) => {
        const proceed = confirm('Are you sure Delete');
        if (proceed) {
            fetch(`https://car-doctor-server-dusky-five.vercel.app/bookings/${id}`, {
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

    const handleBookingConfirm = (id) => {
        fetch(`https://car-doctor-server-dusky-five.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Confirm successfully')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const update = bookings.find(booking => booking._id == id);
                    update.status = 'confirm';
                    const newBooking = [update, ...remaining];
                    setBookings(newBooking);
                }
            })
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
                                handleBookingConfirm={handleBookingConfirm}

                            ></BookingTable>)
                        }


                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default Bookings;