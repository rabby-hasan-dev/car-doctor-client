

const BookingTable = ({ booking, handleDelete, handleBookingConfirm }) => {

    const { _id, CustomerName, date, img, price, service_id, services, status } = booking;



    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn  btn-sm btn-circle w-25">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 h-24 rounded-xl">
                        <img src={img} />
                    </div>
                </div>
            </td>
            <td>
                {CustomerName}
            </td>
            <td>{services}</td>
            <td>{price}</td>
            <td>{date}</td>
            <th>
                {status === 'confirm' ? <span className="font-bold text-primary ">confirm</span> : <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
        </tr>

    );
};

export default BookingTable;